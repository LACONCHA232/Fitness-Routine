import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Welcome from './components/main/welcome/Welcome';

function App() {
  return (
    <>
      <div className='container-all'>
        <header>
            <Header/>
          </header>
          <main>
            <Welcome/>
          </main>
          <footer>
            
          </footer>
      </div>
    </>
  )
}

export default App
