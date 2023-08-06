import { Response,Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createUser = async(req:Request,res:Response)=>{
try {

    const {email,password,last_name,first_name} = req.body;

    const newUser = await prisma.user.create({
        data:{
            email,
            password,
            last_name,
            first_name,
            role:"customer"
        }
    })

    // const findUser = await prisma.user.findMany() 
    
    console.log(newUser)
    return
} catch (error:any) {
    console.log("Error:", error.message)
}
}