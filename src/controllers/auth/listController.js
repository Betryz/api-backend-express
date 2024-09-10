import { listAuth } from "../../models/authModel.js"

const list = async (req, res, next) => {

    try {
        const user = await listAuth()


        return res.json({
            message: "Contas listadas com sucesso!",
            user
        })
    }catch(error){
        next(error)
       

    }
    
}

export default list