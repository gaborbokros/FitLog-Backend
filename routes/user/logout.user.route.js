import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.json({ path: "/logout", method: "POST" })
})

export default router