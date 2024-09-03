import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const listAccounts = async () => {
    const accounts = await prisma.account.findMany()

    return accounts 

}

export const getIdAccount = async (id) => {

        const account = await prisma.account.findUnique( {where:  {id} });

    return account

}

export const deleteAccount = async (id) => {

    const account = await prisma.account.delete({where:  {id} });

return account

}

export const createAccount = async (account) => {

    const result = await prisma.account.create({
        data: account
    })

    return result
}


export const updateAccount = async (account) => {

    const result = await prisma.account.update({
        data: account,
        where:{
            id: account.id
        }
    })

    return result
}


export const signup = async (auth) => {

    const result = await prisma.user.create({
        data: auth
    })

    return result
}




