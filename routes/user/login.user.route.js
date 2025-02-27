import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.json({ path: "/login", method: "POST" })
})

export default router