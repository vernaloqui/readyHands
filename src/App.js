import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import LogIn from './pages/LogIn';
import SignUp from './components/SignUp';
import Footer from './Footer';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/handyman" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<MyAccount />} />
        </Routes>
      </div><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
