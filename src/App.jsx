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

  // 다음달
  const nextMonth = () =>{
    if(month == 11){
       setMonth(0); //1월
       setYear(year + 1); //다음년도 
       return;
    }
    setMonth(month + 1);  
    console.log('next')
  }
  // 이전달
  const prevMonth = () =>{
    if(month === 0){
      setMonth(11); //1월
      setYear(year - 1); //다음년도 
      return;
    }

    setMonth(month - 1); 
    console.log('prev')
  }

  return (
   <div className="App">
    <Header/>
    {/*년 월 일 state를 카렌더 컨포넌트에 전달*/}
    <Calendar year = {year} month = {month} date = {date} />
    <div className="btn-group">
      <button className='btn' onClick={prevMonth}>prev</button>
      <button className='btn' onClick={nextMonth}>next</button>
    </div>
   </div>
  )
}

export default App