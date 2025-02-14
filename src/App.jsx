import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
const App = () => {
 
  return (
    <BrowserRouter>
     
      <Routes>
        <Route  path='/home' element={<HomePage />}/>
        <Route  path='/' element={<LoginPage />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
