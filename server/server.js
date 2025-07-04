// server.js (ESM version)
import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import appRoutes from "./app.js";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors()); 

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

appRoutes(app, notion, databaseId);

app.listen(3000, () => {
  console.log("Serveur lancé sur le port 3000");
});