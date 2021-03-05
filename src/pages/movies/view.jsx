import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchFilms } from '../../store/app/reducer';

const View = () => {
	const movies = useSelector(state => state.app.films);
	const dispatch = useDispatch();
	
	const [searchValue, setSearchValue] = useState("");
	const [result, setResult] = useState(movies);
	
	const initSearchValue =  useSelector(state => { return state.searchValue; });

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	}

	useEffect(() => {
		console.log(movies);
		if (movies !== undefined && movies.length === 0) { 
			dispatch(fetchFilms());
		}
	});

	useEffect(() => {
		if (searchValue !== initSearchValue) {
			const temp = movies.filter(movie =>
			movie.title.toLowerCase().includes(searchValue)
			);
			setResult(temp);
		}
	}, [movies, searchValue, initSearchValue]);

	return (
		<div>
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
			/>
			<button onClick={() => setResult(result.sort())}>sort</button>
			{result.map((movie, index) => 
				<details key={index}>
					<summary>{movie.title}</summary>
					<p>{movie.opening_crawl}</p>
				</details>)}		
		</div>
	);
};

export { View };