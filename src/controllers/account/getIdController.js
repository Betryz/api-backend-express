import { getIdAccount, accountValidateId } from "../../models/accountModel.js"

const id = async (req, res, next) => {
    
    try {
        const { id } = req.params

        
        const accountValidated = accountValidateId(+id)


        if(!accountValidated.success){
            return res.status(401).json({
                error: "Erro ao buscar um serviço!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        }




        const account = await getIdAccount(accountValidated.data.id)


        if (!account)

            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })



        return res.json({
            success: "Conta achada com sucesso",
            account


        })

    } catch (error) {
        next(error)

    }
}

export default id