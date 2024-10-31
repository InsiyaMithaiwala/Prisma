import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
      email:"insiyam@gmail.com",
      name:"Insiya Mithaiwala"
    }
  })
}

main()
 
  