import { lazy } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Layouts
const Container = lazy(() => import('../../Container/Container'));
const Home = lazy(() => import('../../Layouts/Pages/Home/Home'));
const EbooksList = lazy(() => import('../../Layouts/Pages/EbooksList/EbooksList'));
const EbookDetails = lazy(() => import('../../Layouts/Pages/EbookDetails/EbookDetails'));

const Routes = () => {
	const Path = '/';

	return useRoutes([
		{
			path: Path,
			element: <Container />,
			// element: AccessToken ? <Container /> : <Navigate to={Path + 'sign-in'} />,
			children: [
				{ path: '', element: <Home /> },
				{ path: '/EbooksList', element: <EbooksList /> },
				{ path: '/EbookDetails/:id', element: <EbookDetails /> },
			]
		}
	]);
}

export default Routes;