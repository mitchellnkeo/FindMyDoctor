// import pg from "pg";
// import dotenv from "dotenv";
// import express from "express";

// const { DATABASE_URL } = process.env

// dotenv.config();

// const client = new pg.Client({
//     connectionString: DATABASE_URL
// })
// const getProviders = (req, res) => {
//     client.query("SELECT * FROM healthcareProvider", (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     })
// };

// export {getProviders};