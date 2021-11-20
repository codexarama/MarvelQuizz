import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Welcome from '../Welcome';
import Login from '../Login';
import Register from '../Register';
import Error from '../Error';
import Landing from '../Landing';
import Footer from '../Footer';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
