import BookThumbnail from '../components/reused/BookThumbnail';
import { useParams } from 'react-router-dom';
import useCategory from '../services/hooks/useCategory';

function CategoryPage() {
    const { category } = useParams();
    const { books, noResult } = useCategory({ category: category });
    return (
        <div>
            {books?.map((book, i) => {
                return (
                    <li key={book.title}>
                        <BookThumbnail book={book} />
                    </li>
                );
            })}
        </div>
    );
}

export default CategoryPage;
