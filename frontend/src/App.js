import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Login from "./pages/login";
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Sidebar from './components/sidebar';
import Product from './pages/product';
import Detail from './pages/detail_product';

export const SidebarLayout = () => (
  <div className='flex'>
    <Sidebar />
    <Outlet />
  </div>
);

function App() {

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
              <Route element={<SidebarLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/:id" element={<Detail/>}/>
              </Route>
        </Routes>
    </Router>
  );
}

export default App;
