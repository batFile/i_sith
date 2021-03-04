import {
	Movies,
} from './../pages';

const routes = {
	'movies': {
		path: '/',
		page: Movies,
		name: 'Movies',
		link () {
			return this.path;
		},
		exact: true,
	},
};

const __ROOT_ROUTE__ = routes.movies.link();

export { routes, __ROOT_ROUTE__ };