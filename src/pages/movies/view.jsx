import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchFilms } from '../../store/app/reducer';

const View = () => {
	const movies = useSelector(state => state.app.films);
	const dispatch = useDispatch();
	useEffect(() => dispatch(fetchFilms()));
	return (
		<div>
			{movies.map((movie, index) => 
				<div key={index}>{movie.title}</div>
			)}		
		</div>
	);
};

export { View };