import { lazy, Suspense } from 'react';
import { useAuth } from '@workos-inc/authkit-react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { DashboardLayout } from 'src/layouts/dashboard';

import { Loader } from 'src/components/loader';


// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const ChartsPage = lazy(() => import('src/pages/charts'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------


function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loader/>
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

function AuthRoutes({ children }: { children: JSX.Element }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loader/>
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export function Router() {
  return useRoutes([
    {
      element: (
        <PrivateRoute>
          <DashboardLayout>
            <Suspense fallback={<Loader/>}>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'charts', element: <ChartsPage /> },
      ],
    },
     {
      path: 'sign-in',
      element: (
        <AuthRoutes>
          <SignInPage />
        </AuthRoutes>
      ),
    }, 
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
