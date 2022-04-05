import { useParams } from 'react-router-dom';

function CategoryPage() {
    const { category } = useParams();
    //const { books, noResult } = useCategory({ category: category });
    return (
        <></>
        /*
		<div>
			{books?.map((book, i) => {
				return (
					<li key={book.title}>
						<BookThumbnail book={book} />
					</li>
				);
			})}
		</div>*/
    );
}

export default CategoryPage;
