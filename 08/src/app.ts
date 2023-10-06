// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createUser= async ()=>{
    const userCreated= await prisma.paciente.create({
        data:{
            nombre: "Pedorrin",
            apellido: "Pompom",
            fechaNacimiento: (19-12-2001), // Fecha en formato ISO8601
            direccion: "Eloy Alfaro, av 12",
            email: "cristinapa199@gmail.com"
        }
    });
    console.log(userCreated)
    // console.log(userCreated)
    // const optionCreated= await prisma.optionsModel.create({
    //     data:{
    //         title:"prueba",
    //         active:true,
    //         userId:userCreated.id            
    //     }
    // })
}

const queryUser= async ()=>{
    const user= await prisma.paciente.findMany({
         where:{
            id:1
        }
    })
    console.log(user)
}

const updateUser= async ()=>{
    const user= await prisma.paciente.update({
        data:{
            nombre: "Pedorrin",
            apellido: "Pompom",
            fechaNacimiento: (19-12-2001), // Fecha en formato ISO8601
            direccion: "Eloy Alfaro, av 12",
            email: "cristinapa199@gmail.com"
        },
        where:{
            id:1
        }
    })
}

const deleteUser= async ()=>{
    const user= await prisma.paciente.delete({
        where:{
            id:1
        }
    })
}

(async ()=>{
    // await createUser()
    await queryUser()

})()
