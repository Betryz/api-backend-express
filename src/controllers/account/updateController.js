import { updateAccount } from "../../models/accountModel.js";

const update = async  (req, res) => {
    const account = req.body
    const {id} = req.params

    account.id = +id


    const result = await updateAccount( account); 

    if(!result){
        return res.status(401).json({
            error: "Erro ao modificar conta!"
        })
    }

   return res.json({
        success: "Conta modificada com sucesso!",
        account: result
    })
}

export default update