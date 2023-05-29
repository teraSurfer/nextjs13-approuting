"use client"
import { Book } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  book: Book;
}

const Book = (props: Props) => {
  const { book } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/book/${book.id}`)}
      className="border border-1 p-3 flex flex-col w-64 rounded cursor-pointer hover:border-blue-400 focus:ring-1"
    >
      <div className="font-light">Book</div>
      <div className="flex flex-row justify-between">
        <h5 className="font-bold">{book.name}</h5>
        <span className="font-light">ISBN - {book.isbn}</span>
      </div>
      <span>ID - {book.id}</span>
      <span>Author - {book.authorId}</span>
    </div>
  );
};

export default Book;
