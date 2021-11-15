import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comentario from 'App/Models/Comentario'
import StoreComentarioValidator from 'App/Validators/StoreComentarioValidator'

export default class ProjetosController {
  public async index({ }: HttpContextContract) {
    const comentarioDB = await Comentario.all()
    return comentarioDB
  }

public async store({ request, auth }: HttpContextContract) {
  const data = await request.validate(StoreComentarioValidator)
  const comentarioDB = await Comentario.create({ ...data, userId: auth.user?.id })
  return comentarioDB
}

}