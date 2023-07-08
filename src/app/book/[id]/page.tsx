import DeleteBookButton from "@/components/book/delete-book-button";
import UpdateBookButton from "@/components/book/update-book-button";
import { Book } from "@prisma/client";

export interface BookPageParams {
  params: {
    id: number;
  };
}
// ISR (will reload component on refresh). Without this, data is cached 
// and new content won't load even with hard refresh.
export const revalidate = 10;

export async function getBook(id: number) {
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
    <div className="container mx-auto py-5">
      <div className="sm:w-3/4 p-8 md:w-1/2 flex flex-row justify-between border border-gray-600 rounded">
        <div className="flex flex-col">
          <div className="">
          <label className="mt-3 text-sm font-light">ID:</label>
          <p className="font-semibold">{book.id}</p>
            <label className="mt-3 text-sm font-light">Name:</label>
            <p className="font-semibold">{book.name}</p>
            
          </div>
          <div className="mt-2">
          <label className="text-sm font-light">Description:</label>
          <p className="mt-1 font-regular">{book.description}</p>
          </div>

          <div className="mt-5 flex justify-between w-64">
            <p className="font-light">{book.isbn}</p>
            <p className="font-bold">${book.price}</p>
          </div>
        </div>
        <div className="grid gap-1 grid-cols-2 h-1/4">
          <UpdateBookButton id={book.id} />
          <DeleteBookButton id={book.id} />
        </div>
      </div>
    </div>
  );
}
