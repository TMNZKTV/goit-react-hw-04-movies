// Libraries
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import AppBar from './Components/AppBar/AppBar';

// Additional
import routes from './routes';
import '../src/styles.css';

const HomeView = lazy(() =>
    import('./Views/HomeView' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
    import('./Views/MoviesView' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsView = lazy(() =>
    import('./Views/MovieDetailsView' /* webpackChunkName: "movie-details" */),
);
const NotFoundView = lazy(
    () =>
        import('./Views/NotFoundView') /* webpackChunkName: "notfound-view" */,
);

const App = () => (
    <>
        <AppBar />
        <Suspense fallback={<h1>Загружаем!</h1>}>
            <Switch>
                <Route exact path={routes.home} component={HomeView} />
                <Route
                    path={routes.movieDetails}
                    component={MovieDetailsView}
                />
                <Route path={routes.movies} component={MoviesView} />
                <Route component={NotFoundView} />
            </Switch>
        </Suspense>
    </>
);

export default App;
