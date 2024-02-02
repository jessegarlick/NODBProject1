import express from "express"
import ViteExpress from "vite-express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev")) // while in dev environment, use morgan for additional logging, etc.
app.use(express.urlencoded({ extended: false })) 
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from "./controller.js";



app.get("/invoices", handlerFunctions.getInvoices)
app.post("/invoice/add", handlerFunctions.addInvoice)
app.delete("/invoice/delete/:id", handlerFunctions.deleteInvoice)
app.put("/invoice/update/:id", handlerFunctions.updateInvoice)

ViteExpress.listen(app, 8003, () => console.log(`The zombies are heading over to http://localhost:8003`))