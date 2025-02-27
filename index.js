import 'dotenv/config'
import express from "express"

import userRoute from "./routes/user/user.route.js"

const app = express();

app.use("/user", userRoute)

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))