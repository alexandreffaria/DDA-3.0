import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return (
        <div>
           <h1>Especialistas em você</h1>
           <Outlet />
        </div>
    );
}