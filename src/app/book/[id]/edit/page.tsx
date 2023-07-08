import { BookPageParams, getBook } from "../page";
import UpdateBook from "@/components/book/update-book";

const EditPage = async ({ params: { id } }: BookPageParams) => {
    const book = await getBook(id);

    return (
        <UpdateBook book={book} />
    )
};

export default EditPage;