import nodemailer from 'nodemailer';

export default function(app, notion, databaseId) {
  app.get('/api/projects', async (req, res) => {
    console.log("Requête reçue sur /api/projects...");
    try {
      const filterType = req.query.type; // Récupère le type à filtrer (dev/community management)
      const { results: entries } = await notion.databases.query({ database_id: databaseId });

      console.log(`Nombre d'entrées reçues de Notion : ${entries.length}`);

      // Ajout pour le débogage : Affiche la première entrée de la base de données
      if (entries.length > 0) {
        console.log("Structure de la première entrée Notion :", JSON.stringify(entries[0], null, 2));
      }

      const projects = entries.map(entry => {
        const props = entry.properties;
        return {
          id: entry.id,
          name: props["Name"]?.title?.[0]?.plain_text || "Sans titre",
          image: props["Page"]?.files?.[0]?.file?.url || props["Page"]?.files?.[0]?.external?.url || "",
          images: props["Page"]?.files?.map(f => f.file?.url || f.external?.url).filter(Boolean) || [],
          type: props["Tags"]?.multi_select?.[0]?.name || "",
          tags: props["Tags"]?.multi_select?.map(t => t.name) || [],
          url: props["URL"]?.url || "",
          github: props["GitHub"]?.url || "",
          description: props["Description"]?.rich_text?.[0]?.plain_text || "",
          // Ajoute d'autres champs si besoin
        };
      }).filter(project => !filterType || project.type === filterType);
      res.json(projects);
    } catch (err) {
      console.error("Erreur lors de la communication avec Notion :", err);
      res.status(500).json({ error: "Erreur serveur lors de la récupération des projets" });
    }
  });

  // Route pour un projet spécifique
  app.get('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
      const { results: entries } = await notion.databases.query({ database_id: databaseId });
      const entry = entries.find(e => e.id === projectId);
      if (!entry) {
        return res.status(404).json({ error: "Projet non trouvé" });
      }
      const props = entry.properties;
      
      // Fonction pour récupérer les images depuis différents champs possibles
      const getImages = () => {
        const possibleFields = ["Page", "Pages", "Images", "Gallery", "Photos"];
        for (const field of possibleFields) {
          if (props[field]?.files && props[field].files.length > 0) {
            return props[field].files.map(f => f.file?.url || f.external?.url).filter(Boolean);
          }
        }
        return [];
      };
      
      const images = getImages();
      
      const project = {
        id: entry.id,
        name: props["Name"]?.title?.[0]?.plain_text || "Sans titre",
        image: images[0] || "",
        images: images,
        description: props["Description"]?.rich_text?.[0]?.plain_text || "",
        type: props["Tags"]?.multi_select?.[0]?.name || "",
        tags: props["Tags"]?.multi_select?.map(t => t.name) || [],
        url: props["URL"]?.url || "",
        github: props["GitHub"]?.url || "",
        // Ajoute d'autres champs si besoin
      };
      
      res.json(project);
    } catch (err) {
      console.error("Erreur lors de la communication avec Notion :", err);
      res.status(500).json({ error: "Erreur serveur lors de la récupération du projet" });
    }
  });

  app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Champs manquants' });
    }
    try {
      // Configure le transporteur SMTP (exemple Gmail)
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER, // à définir dans .env
          pass: process.env.MAIL_PASS  // à définir dans .env
        }
      });
      // Prépare l'email
      let mailOptions = {
        from: email,
        to: process.env.MAIL_USER, // ton adresse de réception
        subject: `[Portfolio] ${subject}`,
        text: `Message de ${name} <${email}> :\n\n${message}`
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message envoyé !' });
    } catch (error) {
      console.error('Erreur envoi mail:', error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
  });
}