// Importacion de los React-router
import { Routes, Route } from 'react-router-dom';
// Importacion de los componentes
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';


export const AppRouter = () => {
  return (
    <>

    <Routes>
      <Route path='login' element={ <LoginPage /> } />
      <Route path='/*' element={ <HeroesRoutes /> } />
    </Routes>
    </>
  );
}