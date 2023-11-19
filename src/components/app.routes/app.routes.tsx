import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ThingsList = lazy(() => import('../../pages/list.page/list.page'));
const Details = lazy(() => import('../../pages/details.page/details.page'));

export function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ThingsList></ThingsList>}></Route>
        <Route path="/details/:idOfThing" element={<Details></Details>}></Route>
      </Routes>
    </main>
  );
}
