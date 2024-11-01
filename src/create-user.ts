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
.then(async () => {
  console.log("done");
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
  