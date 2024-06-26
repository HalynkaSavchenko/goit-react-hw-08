import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {dispatch(refreshUser())}, [dispatch])
  return isRefreshing ? (
    <div>
       <p>Please, wait...</p>
       <Loader></Loader>
    </div>) : (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/'/> }/>
          <Route path='/login' element={<RestrictedRoute component={<LogInPage/>} redirectTo='/contacts'/> }/>
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/> }/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}