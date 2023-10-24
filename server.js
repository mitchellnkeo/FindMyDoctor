import express from "express";
import pg from "pg";
import dotenv from "dotenv"
// import { router } from "./src/routes.js"

dotenv.config();

const app = express();
const { port, DATABASE_URL } = process.env;

const client = new pg.Client({
    connectionString: DATABASE_URL
})

await client.connect();

app.use(express.json());

app.use(express.static("public"));

app.get("/providers", (req, res) => {
    client.query("SELECT * FROM healthcareProvider")
    .then((result) => {
        res.status(200).json(result.rows);
    })
})

app.get("/providers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    client.query("SELECT * FROM healthcareProvider WHERE id = $1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
})

// app.use('/api/v1/providers', router);

app.listen(port, () => {
console.log(`Server is listening on port: ${ port }`)});