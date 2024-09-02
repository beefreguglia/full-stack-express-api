import { Request, Response } from 'express'

export class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.body

    response.send(`Page: ${page} Limit: ${limit}`)
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body

    throw new Error("Erro na criação do produto")
    
    response.status(201).json({ name, price, user_id: request.user_id })
  }
}