import { Route, Routes } from 'react-router';
import Home from '../page/Home';
import NotFound from '../page/NotFound';
import BiblesList from '../../bible/BiblesList';
import ChapterSkin from '../../bible/ChapterSkin';

export default function BblRouter() {
    return (
        <Routes> 
          <Route path="/" element={ <Home /> } />

          <Route path="/bibles" element={ <BiblesList /> } />
          <Route path="/bibles/:bibleName/:bookShortName/:chapterNum" element={ <ChapterSkin /> } />

          <Route path="*" element={<NotFound/>}/>
        </Routes>
       
      )
}
