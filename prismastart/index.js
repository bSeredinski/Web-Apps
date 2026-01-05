import express from 'express'
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Witaj w mojej aplikacji Express + Prisma!");
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})