
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './page/page1'
import Page2 from './page/page2'
import Page3 from './page/page3'

function App() {

  return (
    <>
    <Link to={"/"}>Page1</Link>
    <Link to={"/page2"}>Page2</Link>
    <Link to={"/page3"}>Page3</Link>
    <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/page2' element={<Page2/>}/>
      <Route path='/page3' element={<Page3/>}/>
      </Routes>
    </>
  )
}

export default App
