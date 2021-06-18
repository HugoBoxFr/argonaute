import './App.scss';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
