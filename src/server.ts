import express from "express"

const PORT = 3333

const app = express()

app.get("/products/:id/:category", (request, response) => {
  const { id, category } = request.params

  response.send(`Produto ${id} e categoria ${category}`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

