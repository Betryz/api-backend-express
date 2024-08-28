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




