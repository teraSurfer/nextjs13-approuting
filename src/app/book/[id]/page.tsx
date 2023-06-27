import DeleteBookButton from "@/components/book/delete-book-button";
import { Book } from "@prisma/client";

interface BookPageParams {
  params: {
    id: number;
  };
}

async function getBook(id: number) {
  const data: Promise<{ book: Book }> = fetch(
    `http://localhost:3000/api/book/${id}`
  )
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
    <div className="container mx-auto">
      <div className="w-100 p-8 flex flex-row justify-between border border-gray-600 rounded">
        <div className="">
          <p className="font-semibold">{book.id}</p>
          <p className="">{book.name}</p>
        </div>
        <div className="">
          <DeleteBookButton id={book.id} />
        </div>
      </div>
    </div>
  );
}
