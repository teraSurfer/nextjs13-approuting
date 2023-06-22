import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const book = await request.json();
    console.log(book);
    await prisma.book.create({
        data: {
            ...book
        }
    })
    return NextResponse.json({
        ...book,
    }, {status: 201})
};