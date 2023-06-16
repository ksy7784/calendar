import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {
  //년 월 일 생성 및 state
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  console.log(year,month,date)

  return (
   <div className="App">
    <Header/>
    <Calendar/>
   </div>
  )
}

export default App