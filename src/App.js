
import './App.css';
import { ThemeProvider } from '@mui/material';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { theme } from './theme/MyTheme'
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Buying from './components/Buying';
import Purchase from './components/Purchase';
import Profile from './components/Profile';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buy/:categories" element={<Buying />} />
        <Route path="/product/:categories" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />

      </Routes>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
