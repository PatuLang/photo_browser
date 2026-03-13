import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/homePage';
import PhotoList from './pages/photoListPage';
import PhotoId from './pages/photoIdPage';
import NoPage from './pages/noPage';

export const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/home", element: <Home/>},
  {path: "/photos", element: <PhotoList/>},
  {path: "/photos/:id", element: <PhotoId/>},
  {path: "*", element: <NoPage/>}
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
