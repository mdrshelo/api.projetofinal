import express from "express";
import path from "path";

const app = express();

// Permite receber dados em JSON
app.use(express.json());

// Permite receber dados enviados por formulários
app.use(express.urlencoded({ extended: true }));

// Configura o EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configura arquivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Configura a pasta de uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;