import { deleteAccount } from "../../models/accountModel.js" 

const deleteController  =  async (req, res) => {
    const {id} = req.params
    const account = await deleteAccount(+id)

    


    if(!account)
    return res.status(404).json({
        error: `Conta com o id ${id}, não encontrado!`
    })

    res.json({
        message: `Conta ${id} deletada com sucesso`

    })
}

export default deleteController