import Footer from 'Footer';
import NavBar from 'NavBar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
