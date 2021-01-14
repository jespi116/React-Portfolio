import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer'; 

function App() {
  const [categories] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <header className="flex-row space-between" >
        <Header />
        <Nav 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </header>
      <main>
        <Body currentCategory={currentCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
