'use client'

import { createBookReducer } from "@/app/book/new/page";
import { Book } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FormEvent, useReducer } from "react";

interface Props {
    book: Book
}

const UpdateBook = ({ book }: Props) => {
    const [state, dispatch] = useReducer(createBookReducer, book);
    const { push } = useRouter();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(state);
        await fetch(`/api/book/${book.id}`, {
            body: JSON.stringify(state),
            method: 'PUT'
        });
        push(`/book/${book.id}`);
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center p-20">
                <div className="w-8/12">
                    <form className="w-100" onSubmit={handleSubmit}>
                        <h3 className="font-semibold text-center">Update Book</h3>
                        <div className="flex flex-col">
                            <label className="my-2">Name:</label>
                            <input
                                className="border-gray-200 border-2 rounded p-2"
                                type="text"
                                value={state.name?.toString()}
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
                                value={state.isbn?.toString()}
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
                                value={state.authorId?.toString()}
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
                                value={state.description?.toString()}
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
                                value={state.status?.toString()}
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
                                value={state.price?.toString()}
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
                                value={state.previewImage?.toString()}
                                placeholder="Book Image URL"
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_IMAGE',
                                    payload: e.target.value,
                                })}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="px-4 py-2 bg-blue-600 text-white mt-2 rounded focus:ring">
                                Update Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateBook;
