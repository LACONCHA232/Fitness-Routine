import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About'
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
