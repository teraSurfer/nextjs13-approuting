"use client";
import React, { useReducer } from "react";
import {useRouter} from "next/navigation";

interface CreateBookFormState {
  name: String | null;
  isbn: String | null;
  authorId: Number | null;
  description: String | null;
  status: String | null;
  price: Number | null;
  previewImage: String | null;
}

const initialState: CreateBookFormState = {
  name: "",
  isbn: "",
  authorId: 0,
  description: "",
  status: "",
  price: 0,
  previewImage: "",
};

export type CreateBookFormAction = {
  type:
    | "UPDATE_NAME"
    | "UPDATE_ISBN"
    | "UPDATE_AUTHOR"
    | "UPDATE_DESC"
    | "UPDATE_STATUS"
    | "UPDATE_PRICE"
    | "UPDATE_IMAGE";
  payload: string;
};

export const createBookReducer = (
  state: CreateBookFormState,
  action: CreateBookFormAction
): CreateBookFormState => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "UPDATE_ISBN":
      return {
        ...state,
        isbn: action.payload,
      };
    case "UPDATE_AUTHOR":
      return {
        ...state,
        authorId: Number(action.payload),
      };
    case "UPDATE_DESC":
      return {
        ...state,
        description: action.payload,
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "UPDATE_IMAGE":
      return {
        ...state,
        previewImage: action.payload,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        price: Number(action.payload),
      };
    default:
      return state;
  }
};

export default function CreateBook() {
  const [state, dispatch] = useReducer(createBookReducer, initialState);
  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
		await fetch('/api/book', {
			body: JSON.stringify(state),
			method: 'POST'
		});

    push('/');
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center p-20">
        <div className="w-8/12">
          <form className="w-100" onSubmit={handleSubmit}>
            <h3 className="font-semibold text-center">Create Book</h3>
            <div className="flex flex-col">
              <label className="my-2">Name:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book name"
								onChange={(e) => dispatch({
									type: 'UPDATE_NAME',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">ISBN:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book ISBN"
								onChange={(e) => dispatch({
									type: 'UPDATE_ISBN',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Author:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book Author"
								onChange={(e) => dispatch({
									type: 'UPDATE_AUTHOR',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Description:</label>
              <textarea
                className="border-gray-200 border-2 rounded p-2"
                rows={4}
                placeholder="Book Description"
								onChange={(e) => dispatch({
									type: 'UPDATE_DESC',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Status:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book Status (SOLD|AVAILABLE)"
								onChange={(e) => dispatch({
									type: 'UPDATE_STATUS',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Price:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book Price in INR"
								onChange={(e) => dispatch({
									type: 'UPDATE_PRICE',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Image URL:</label>
              <input
                className="border-gray-200 border-2 rounded p-2"
                type="text"
                placeholder="Book Image URL"
								onChange={(e) => dispatch({
									type: 'UPDATE_IMAGE',
									payload: e.target.value,
								})}
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="px-4 py-2 bg-blue-600 text-white mt-2 rounded focus:ring">
                Create Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
