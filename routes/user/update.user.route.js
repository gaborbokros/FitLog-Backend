import { Router } from "express";

const router = Router();

router.put("/", (req, res) => {
    res.json({ path: "/update", method: "PUT" })
})

export default router