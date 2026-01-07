import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE kategoria
router.post("/", async (req, res) => {
    const { nazwa } = req.body;
    const kategoria = await prisma.kategoria.create({ data: { nazwa } });
    res.json(kategoria);
});

// READ wszystkie kategorie
router.get("/", async (req, res) => {
    const kategorie = await prisma.kategoria.findMany({ include: { wpisy: true } });
    res.json(kategorie);
});

// READ pojedyncza kategoria
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const kategoria = await prisma.kategoria.findUnique({
        where: { id: Number(id) },
        include: { wpisy: true },
    });
    res.json(kategoria);
});

// UPDATE kategoria
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { nazwa } = req.body;
    const kategoria = await prisma.kategoria.update({
        where: { id: Number(id) },
        data: { nazwa },
    });
    res.json(kategoria);
});

// DELETE kategoria
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.kategoria.delete({ where: { id: Number(id) } });
    res.json({ message: "Kategoria usunięta" });
});

export default router;
