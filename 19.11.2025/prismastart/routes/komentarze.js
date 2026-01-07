import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE komentarz
router.post("/", async (req, res) => {
    const { tresc, wpisId } = req.body;
    const komentarz = await prisma.komentarz.create({
        data: { tresc, wpisId },
    });
    res.json(komentarz);
});

// READ wszystkie komentarze
router.get("/", async (req, res) => {
    const komentarze = await prisma.komentarz.findMany({
        include: { wpis: true },
    });
    res.json(komentarze);
});

// READ pojedynczy komentarz
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const komentarz = await prisma.komentarz.findUnique({
        where: { id: Number(id) },
        include: { wpis: true },
    });
    res.json(komentarz);
});

// UPDATE komentarz
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { tresc } = req.body;
    const komentarz = await prisma.komentarz.update({
        where: { id: Number(id) },
        data: { tresc },
    });
    res.json(komentarz);
});

// DELETE komentarz
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.komentarz.delete({ where: { id: Number(id) } });
    res.json({ message: "Komentarz usunięty" });
});

export default router;
