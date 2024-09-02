import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"

const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
  const { page, limit } = request.body

  response.send(`Page: ${page} Limit: ${limit}`)
})


// Middleware local, aplica somente para essa rota
productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body

  // response.send(`Produto ${name} custa $ ${price}`)
  response.status(201).json({ name, price, user_id: request.user_id })
})

export { productsRoutes }