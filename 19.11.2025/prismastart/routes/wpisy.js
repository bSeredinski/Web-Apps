import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE wpis
router.post("/", async (req, res) => {
    const { tytul, tresc, kategoriaId } = req.body;
    const wpis = await prisma.wpis.create({ data: { tytul, tresc, kategoriaId } });
    res.json(wpis);
});

// READ wszystkie wpisy
router.get("/", async (req, res) => {
    const wpisy = await prisma.wpis.findMany({
        include: { kategoria: true, komentarze: true },
    });
    res.json(wpisy);
});

// READ pojedynczy wpis
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const wpis = await prisma.wpis.findUnique({
        where: { id: Number(id) },
        include: { kategoria: true, komentarze: true },
    });
    res.json(wpis);
});

// UPDATE wpis
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { tytul, tresc, kategoriaId } = req.body;
    const wpis = await prisma.wpis.update({
        where: { id: Number(id) },
        data: { tytul, tresc, kategoriaId },
    });
    res.json(wpis);
});

// DELETE wpis
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.wpis.delete({ where: { id: Number(id) } });
    res.json({ message: "Wpis usunięty" });
});

export default router;
