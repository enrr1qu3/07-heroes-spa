import { useContext } from "react"
import {Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  // useEffect(() => {
  //   const lastPath = pathname + search;
  //   localStorage.setItem('lastPath', lastPath);
  
  //   return () => {
  //     console.log('re-render');
      
  //   }
  // }, [pathname, search])

  return ( logged )
  ? children
  : <Navigate to="/login" />
}
