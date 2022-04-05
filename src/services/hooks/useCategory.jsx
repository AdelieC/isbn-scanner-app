//libraries

//services

//components

function useCategory({ category }) {
    /*const [noResult, setNoResult] = useState(false);
	const { data: books, refetch } = useQuery(['fetchByCategory', category], () =>
		fetchBooksByCategory(category)
	);

	const reset = () => {
		setNoResult(false);
	};

	useEffect(() => {
		if (category && books?.length === 0) setNoResult(true);
	}, [books]);

	return {
		books,
		reset,
		noResult,
	};*/
    return null;
}

useCategory.propTypes = {};

export default useCategory;
