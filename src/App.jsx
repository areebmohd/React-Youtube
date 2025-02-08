import Navbar from "./components/navbar"
import {Route, Routes} from 'react-router-dom'
import Home from './components/home.jsx'
import Video from './components/video.jsx'
import {useState} from 'react'

function App() {

  const [sidebar,setSidebar] = useState(true)
  const [category, setCategory] = useState(0)

  return (
    <>
      <Navbar setSidebar={setSidebar} sidebar={sidebar} category={category} setCategory={setCategory}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} category={category} setCategory={setCategory}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App