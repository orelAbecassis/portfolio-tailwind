export default function(app, notion, databaseId) {
  app.get('/api/projects', async (req, res) => {
    console.log("Requête reçue sur /api/projects...");
    try {
      const filterType = req.query.type; // Récupère le type à filtrer (pro/perso)
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
          type: props["Tags"]?.multi_select?.[0]?.name || "",
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
      const project = {
        id: entry.id,
        name: props["Name"]?.title?.[0]?.plain_text || "Sans titre",
        image: props["Page"]?.files?.[0]?.file?.url || props["Page"]?.files?.[0]?.external?.url || "",
        description: props["Description"]?.rich_text?.[0]?.plain_text || "",
        type: props["Tags"]?.multi_select?.[0]?.name || "",
        // Ajoute d'autres champs si besoin
      };
      res.json(project);
    } catch (err) {
      console.error("Erreur lors de la communication avec Notion :", err);
      res.status(500).json({ error: "Erreur serveur lors de la récupération du projet" });
    }
  });
}