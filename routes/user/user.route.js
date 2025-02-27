import { Router } from "express";

import registerRoute from "./register.user.route.js"
import loginRoute from "./login.user.route.js"
import logoutRoute from "./logout.user.route.js"
import updateRoute from "./update.user.route.js"
import deleteRoute from "./delete.user.route.js"

const router = Router();

router.use("/register", registerRoute)
router.use("/login", loginRoute)
router.use("/logout", logoutRoute)
router.use("/update", updateRoute)
router.use("/delete", deleteRoute)

router.get("/", (req, res) => {
    res.json({ path: "/", method: "GET" })
})

export default router