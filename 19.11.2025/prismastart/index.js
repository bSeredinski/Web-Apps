import express from "express";
import { PrismaClient } from "@prisma/client";

import wpisyRouter from "./routes/wpisy.js";
import kategorieRouter from "./routes/kategorie.js";
import komentarzeRouter from "./routes/komentarze.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.use("/wpisy", wpisyRouter);
app.use("/kategorie", kategorieRouter);
app.use("/komentarze", komentarzeRouter);


app.get("/", (req, res) => {
    res.send("API działa!");
    console.log(prisma);

});

const PORT = 3000;
app.listen(PORT, () => console.log(`Serwer działa na http://localhost:${PORT}`));
