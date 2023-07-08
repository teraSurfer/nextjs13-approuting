import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { pathname } = new URL(request.url);
    const [_, api, book, bookId] = pathname.split('/');
    console.log(`api - ${api} :: book - ${book} :: bookId - ${bookId}`);
    try {
        const book = await prisma.book.findFirstOrThrow({
            where: {
                id: Number(bookId),
            }
        });

        return NextResponse.json({book}, {
            status: 200,
        });
    } catch (err) {
        return NextResponse.json({
            error: 'No book found for ID: ' + bookId
        }, {
            status: 404,
            statusText: 'No such book'
        })
    }
}

export async function PUT(request: Request) {
    const {pathname} = new URL(request.url);
    const [_, api, bookString, bookId] = pathname.split('/');

    const book = await request.json();

    console.log(book);

    await prisma.book.update({
        where: {
            id: Number(bookId)
        },
        data: {
            ...book
        }
    });
    return NextResponse.json({
        ...book,
    }, {status: 200});
}

export async function DELETE(request: Request) {
    const {pathname} = new URL(request.url);
    const [_, api, book, bookId] = pathname.split('/');

    try {
        await prisma.book.delete({
            where: {
                id: Number(bookId)
            }
        })

        
        return NextResponse.json({book}, {
            status: 200,
        });
    } catch(err) {
        return NextResponse.json({
            error: 'No book found for ID: ' + bookId
        }, {
            status: 404,
            statusText: 'No such book'
        })
    }
}
