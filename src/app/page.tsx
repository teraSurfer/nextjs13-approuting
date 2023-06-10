import Book from "@/components/home/book";
import prisma from "@/lib/prisma";

export default async function Home() {
  const books = await prisma.book.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 grid-cols-2">
        {books.map((book) => (
          <Book key={book.isbn} book={book} />
        ))}
      </div>
    </main>
  );
}
