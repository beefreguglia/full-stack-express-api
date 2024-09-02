import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"

const PORT = 3333

const app = express()

app.use(express.json())


// Middleware global, aplica em todas rotas abaixo dele
// app.use(myMiddleware)

app.use(routes)

// Colocamos no final para pegar todos os erros disparados pelo sistema
app.use((
  error: any, 
  request: Request, 
  response: Response, 
  _: NextFunction
) => {
  response.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

