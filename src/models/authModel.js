import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export const listAuth = async () => {
    const user = await prisma.user.findMany()

    return user

}



export const signup = async (auth) => {

    const result = await prisma.user.create({
        data: auth
    })

    return result
}




