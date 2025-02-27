import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.json({ path: "/register", method: "POST" })
})

export default router