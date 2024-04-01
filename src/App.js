import './App.css';
import MainPage from './MainPage';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <NavigationMenuDemo />
    // <NavBar />
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
