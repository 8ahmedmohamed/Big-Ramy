import { lazy } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Layouts
const Container = lazy(() => import('../../Container/Container'));
const Home = lazy(() => import('../../Layouts/Pages/Home/Home'));
const EBooks = lazy(() => import('../../Layouts/Pages/EBooks/EBooks'));
// const SignIn = lazy(() => import('../../Layouts/Helpers/SignIn/SignIn'));
// const SignUp = lazy(() => import('../../Layouts/Helpers/SignUp/SignUp'));
// const Error404 = lazy(() => import('../../Layouts/Helpers/Error404/Error404'));

const Routes = () => {
	const Path = '/';
	// const AccessToken = !!localStorage.token;

	return useRoutes([
		{
			path: Path,
			element: <Container />,
			// element: AccessToken ? <Container /> : <Navigate to={Path + 'sign-in'} />,
			children: [
				{ path: '', element: <Home /> },
				{ path: '/EBooks', element: <EBooks /> },
			]
		},
		// {
		// 	path: Path + 'sign-in',
		// 	element: AccessToken ? <Navigate to={Path} /> : <SignIn />
		// },
		// {
		// 	path: Path + 'sign-up',
		// 	element: AccessToken ? <Navigate to={Path} /> : <SignUp />
		// },
		// { path: Path + '*', element: <Error404 /> }
	]);
}

export default Routes;