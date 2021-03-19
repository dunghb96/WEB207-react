import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Album';

function App() {
  const myName ='Le Khac Dung';
  const age=25;
  const person={
    name: 'Le Khac Dung',
    age:20
  }
  const sum=(a,b)=>{
    return a+b;
  }
  return (
    <div className="App">
    <Header/>
    <main>
      <Banner/>
      <Albums/>
    </main>
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
        <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
      </div>
    </footer>
  </div>

  );
}

export default App;
