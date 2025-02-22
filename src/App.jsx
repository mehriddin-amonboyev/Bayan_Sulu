import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout';
import { NewProduct } from './section/newProduct/newProduct';
import { Home } from './pages/home/home';
function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='product/:id' element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
