import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { BarLoader } from 'react-spinners';
import Navigation from "../Navigation/Navigation";
import css from './App.module.css';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage')
);
const CampersPage = lazy(() =>
  import('../../pages/CampersPage/CampersPage')
);
const CamperPage = lazy(() =>
  import('../../pages/CamperPage/CamperPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const CamperPageReviews = lazy(() =>
  import('../CamperPageReviews/CamperPageReviews')
);
const CamperPageFeatures = lazy(() =>
  import('../CamperPageFeatures/CamperPageFeatures')
);

const App = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main>
      <Suspense
        fallback={
          <div className="barloader">
             <BarLoader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route index element={<CamperPageFeatures />} />
            <Route path="reviews" element={<CamperPageReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
