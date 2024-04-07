
import './App.css';
import { ThemeProvider } from '@mui/material';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { theme } from './theme/MyTheme'
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
