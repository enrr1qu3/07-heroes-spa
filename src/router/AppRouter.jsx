// Importacion de los React-router
import { Routes, Route } from 'react-router-dom';
// Importacion de los componentes
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>

    <Routes>

      ro

      <Route path='login' element={
        <PublicRoute>
          <LoginPage /> 
        </PublicRoute>

      } />

      <Route path='/*' element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
       } />

      {/* <Route path='/*' element={ <HeroesRoutes /> } /> */}

    </Routes>
    </>
  );
}