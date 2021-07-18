import { users } from "./users";
import { PrismaClient } from "@prisma/client";

//create new instance of prisma
const prisma = new PrismaClient();
async function createUser() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}
createUser().catch((e) => {
  console.log(e);
  process.exit(1);
});

createUser().finally(() => {
  prisma.$disconnect();
});
