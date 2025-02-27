import { Router } from "express";

const router = Router();

router.delete("/", (req, res) => {
    res.json({ path: "/delete", method: "DELETE" })
})

export default router