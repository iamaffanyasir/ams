import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
