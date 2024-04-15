import { Route, Routes } from 'react-router';
import Home from '../page/Home';
import NotFound from '../page/NotFound';

export default function BblRouter() {
    return (
        <Routes> 
          <Route path="/" element={ <Home /> } />

          <Route path="*" element={<NotFound/>}/>
        </Routes>
       
      )
}
