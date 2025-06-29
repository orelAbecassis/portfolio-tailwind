export default function(app, notion, databaseId) {
  app.get('/api/projects', async (_, res) => {
    try {
      const { results: entries } = await notion.databases.query({ database_id: databaseId });
      const projects = entries.map(entry => {
        const props = entry.properties;
        return {
          id: entry.id,
          name: props["Nom"]?.title?.[0]?.plain_text || "Sans titre",
          image: props["Image"]?.files?.[0]?.file?.url || props["Image"]?.files?.[0]?.external?.url || "", // selon le type de champ Notion
          // Ajoute d'autres champs si besoin
        };
      });
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  });
}