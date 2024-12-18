import express from "express";
import taskRoutes from "./routes/router"
import cors from "cors";
import bodyParser from "body-parser";
import path from "path"

const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors())
app.use(bodyParser.json())
app.use("/",taskRoutes)

// app.listen(3000,()=>
// console.log("server is running at http//:localhost:3000"))
app.listen(4000,()=>console.log('Started listening in port 3000'))