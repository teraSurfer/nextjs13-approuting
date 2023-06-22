import BookComponent from "@/components/home/book";
import { CreateBookButton } from "@/components/home/create-book";
import prisma from "@/lib/prisma";
import { Book } from "@prisma/client";

export const revalidate = 10;

export async function getBooks() {
  const books = await prisma.book.findMany();
  return books;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CreateBookButton />
      <div className="grid gap-4 grid-cols-2">
        {books.map((book: Book) => (
          <BookComponent key={book.isbn} book={book} />
        ))}
      </div>
    </main>
  );
}
