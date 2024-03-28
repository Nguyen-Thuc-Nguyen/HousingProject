
import './App.css';
import { ThemeProvider } from '@mui/material';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { theme } from './theme/MyTheme'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
