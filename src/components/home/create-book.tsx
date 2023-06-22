"use client";

import {useRouter} from "next/navigation"

export const CreateBookButton = () => {
	const {push} = useRouter();

	const handleClick = () => {
		push('/book/new')
	}

  return (
    <div className="w-100 ml-auto">
			{/* use `Link` instead for best practice */}
      <button
        onClick={handleClick}
        className="border-0 bg-blue-600 text-white p-2 rounded focus:ring"
      >
        Create book
      </button>
    </div>
  );
};
