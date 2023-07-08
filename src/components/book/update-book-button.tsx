"use client"
import Link from "next/link";

const UpdateBookButton = ({ id }: { id: number }) => {
  return (
    <Link href={`/book/${id}/edit`} className="border-0 bg-blue-700 text-white p-2 rounded focus:ring">
      Update
    </Link>
  );
};

export default UpdateBookButton;
