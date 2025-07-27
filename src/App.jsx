import HomePage from './Pages/HomePage'
import './App.css'
import Main from './Pages/Main'
import Mission from './Pages/Mission' 
import Cards from './Pages/Cards'
import About from './Pages/About'
import Fotter from './Pages/Fotter'
import Reviews from './Pages/Reviews'
import ThreeDiv from './Pages/ThreeDiv'
import AttendancePieChart from './Pages/Charts'
import Holder from './Pages/Holder'
import VisitDetailsTable from './Pages/Student'
import AddDataTable from './Pages/Add_Data'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
   <Routes>
   <Route path="/" element={<HomePage/>} />
   <Route path="/stars" element={<Reviews/>}/>
   <Route path="/schools" element={<AddDataTable/>}/>
    </Routes>
      
    </>
  )
}

export default App
