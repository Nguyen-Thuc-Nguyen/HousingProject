import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
