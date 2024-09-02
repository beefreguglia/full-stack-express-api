import express from "express"

const PORT = 3333

const app = express()

app.get("/", (request, response) => {
  console.log("Request:", request, "Response:", response)
  response.send("Hello World express")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

