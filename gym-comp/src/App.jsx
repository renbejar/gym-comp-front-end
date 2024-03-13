import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
