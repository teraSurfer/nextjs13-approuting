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