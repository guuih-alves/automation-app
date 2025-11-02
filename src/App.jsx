import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'

//PAGES &COMPONENTS
import Login from './Login'
import Material from './Material'

function App() {

  return (
    <Router>
       <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/material" element={<Material/>}></Route>
       </Routes>
    </Router>
  )
}

export default App
