import { Book } from "@prisma/client";

interface BookPageParams {
  params: {
    id: number;
  };
}

async function getBook(id: number) {
  const data: Promise<{book: Book}> = fetch(`http://localhost:3000/api/book/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return (await data)?.book;
}

export default async function Book({ params }: BookPageParams) {
  const book = await getBook(params.id);

  if (!book) {
    throw new Error("No such book");
  }

  return (
    <div>
      {book.id}

      {book.name}
    </div>
  );
}
