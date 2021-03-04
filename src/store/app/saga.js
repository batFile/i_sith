import { put, takeEvery, call } from "redux-saga/effects";
import { API_URL } from "./../../constants/env";
import { FETCH_FILMS, getFilms } from "./reducer";

const fetchMoviesFromApi = () => fetch(API_URL + 'films/');

function* moviesWorker() {
    const data = yield call(fetchMoviesFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(getFilms(json.results));
}

export function* moviesWatcher() {
    yield takeEvery(FETCH_FILMS, moviesWorker);
}