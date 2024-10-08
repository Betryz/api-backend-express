import { deleteAccount, accountValidateId } from "../../models/accountModel.js"

const deleteController = async (req, res, next) => {

    const { id } = req.params
    try {


        const accountValidated = accountValidateId(+id)


        if(!accountValidated.success){
            return res.status(401).json({
                error: "Erro ao deletar um serviço!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        }

        const account = await deleteAccount(accountValidated.data.id)
        res.json({
            message: `Conta ${id} deletada com sucesso`,
            account

        })

    }
    catch (error) {

      
      
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
       
            next(error)


    }



}

export default deleteController