import { Request, Response } from 'express'
import { AppError } from '../utils/app-error'
import { z } from 'zod'


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
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
    })

    const { name, price } = bodySchema.parse(request.body)
    
    
    response.status(201).json({ name, price, user_id: request.user_id })
  }
}