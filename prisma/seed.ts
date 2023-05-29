import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.author.createMany({
        data: [
            {
                name: 'ABC D'
            },
            {
                name: 'Q 1'
            },
            {
                name: 'Q 2'
            }
        ]
    });

    await prisma.book.createMany({
        data: [
            {
                isbn: '1234',
                name: 'ABCD',
                price: 199.99,
                status: 'AVAILABLE',
                authorId: 1,
            },
            {
                isbn: '1235',
                name: 'DDDD',
                price: 187.99,
                status: 'CHECKED_OUT',
                authorId: 2,
            },
            {
                isbn: '1236',
                name: 'QWER',
                price: 549.99,
                status: 'CHECKED_OUT',
                authorId: 3,
            }
        ]
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })