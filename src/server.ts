import express from "express"
import { routes } from "./routes"

const PORT = 3333

const app = express()

app.use(express.json())


// Middleware global, aplica em todas rotas abaixo dele
// app.use(myMiddleware)

app.use(routes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

