import { useState } from 'react';
import BookThumbnail from '../components/reused/BookThumbnail';

function CategoryPage() {
    const [books, setBooks] = useState();
    return (
        <div>
            {books?.map((book, i) => {
                return <BookThumbnail book={book} />;
            })}
        </div>
    );
}

export default CategoryPage;
