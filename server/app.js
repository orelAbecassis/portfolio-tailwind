export default function(app, notion, databaseId) {
  app.get('/api/projects', async (_, res) => {
    console.log("Requête reçue sur /api/projects...");
    try {
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
          image: props["Thumbnail"]?.files?.[0]?.file?.url || props["Thumbnail"]?.files?.[0]?.external?.url || "",
          // Ajoute d'autres champs si besoin
        };
      });
      res.json(projects);
    } catch (err) {
      console.error("Erreur lors de la communication avec Notion :", err);
      res.status(500).json({ error: "Erreur serveur lors de la récupération des projets" });
    }
  });
}