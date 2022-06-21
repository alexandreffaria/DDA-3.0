import { Link, Outlet } from "react-router-dom"
import './App.css';
import Home from './routes/home';


export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/metodologia">Metodologia</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contato">Contato</Link>
      <Outlet />
      
    </div>
    
  );
}

