"use client";

import { useRouter } from "next/navigation";

const DeleteBookButton = ({ id }: { id: number }) => {
  const { push } = useRouter();

  function deleteBook(id: number) {
    fetch(`/api/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        push("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <button onClick={() => deleteBook(id)} className="border-0 bg-red-600 text-white p-2 rounded focus:ring">
      Delete
    </button>
  );
};

export default DeleteBookButton;
