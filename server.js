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

app.post("/providers", (req, res) => {
    const { providername, providerlocation, insuranceplan, services, takingpatients } = req.body

    client.query("INSERT INTO healthcareProvider (providername, providerlocation, insuranceplan, services, takingpatients) VALUES ($1, $2, $3, $4, $5) RETURNING *", [providername, providerlocation, insuranceplan, services, takingpatients])
    .then(results => {
        res.json(results.rows);
    })  
})

app.patch("/providers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { providername, providerlocation, insuranceplan, services, takingpatients } = req.body
    client.query("UPDATE healthcareProvider SET providername = COALESCE ($1, providername), providerlocation = COALESCE ($2, providerlocation), insuranceplan = COALESCE ($3, insuranceplan), services = COALESCE ($4, services), takingpatients = COALESCE ($5, takingpatients) WHERE id=$6 RETURNING *",
    [providername, providerlocation, insuranceplan, services, takingpatients, id])
    .then((results) => {
        res.send(results.rows)
    })
})

app.listen(port, () => {
console.log(`Server is listening on port: ${ port }`)});