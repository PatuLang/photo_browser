import { createHashRouter, RouterProvider } from 'react-router-dom';
import NoPage from './pages/noPage';
import Home from './pages/homePage';
import PhotoList from './pages/photoListPage';
import PhotoId from './pages/photoIdPage';
import UserList from './pages/usersListPage';
import UserId from './pages/userIdPage';
import AlbumList from './pages/albumListPage';
import AlbumId from './pages/albumIdPage';

export const router = createHashRouter([
  {path: "/", element: <Home/>},
  {path: "/home", element: <Home/>},
  {path: "/photos", element: <PhotoList/>},
  {path: "/photos/:id", element: <PhotoId/>},
  {path: "/users", element: <UserList/>},
  {path: "/users/:id", element: <UserId/>},
  {path: "/albums", element: <AlbumList/>},
  {path: "/albums/:id", element: <AlbumId/>},
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
