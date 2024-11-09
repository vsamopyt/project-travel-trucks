import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import CampersPage from '../../pages/CampersPage/CampersPage';
import CamperPage from '../../pages/CamperPage/CamperPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Navigation from '../navigation/navigation';
import CamperPageReviews from '../CamperPageReviews/CamperPageReviews';
import CamperPageFeatures from '../CamperPageFeatures/CamperPageFeatures';

import css from './App.module.css';

const App = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          {/* <Route path="/catalog/:id" element ={<CamperPage/>}/> */}
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="features" element={<CamperPageFeatures />} />
            <Route path="reviews" element={<CamperPageReviews />} />
          </Route>
          <Route patch="*" element={<NotFoundPage />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
