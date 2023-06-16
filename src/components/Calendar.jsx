import React from 'react'

function Calendar(props) {
  //props에서 년 월 일 가져오기
  let {year, month, date} = props;

  //날짜 조회하기
  let d = new Date();
  console.log(d)
  // let year = d.getFullYear(); //년
  // let month = d.getMonth(); //월
  // let day = d.getDate(); //일
  // console.log(year, month, day);

  //말일 구하기(다음달 기준으로 조회해서 일값 = 0 하면 말일)
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  //달력에서 1일이 시작할 위치(요일값 = 0....6)
  let startDate = new Date(year, month, 1 ).getDay();
  console.log(startDate);



  return (
  <>
    <div className='calendar'>
      <header>
        <h2>{year}</h2>
        <span>{month + 1}th</span>
      </header>
      <main>
        <ul className='date'>
        {
          Array(startDate).fill().map((_,i) => {
            return(
            <li key = {i}></li>
            )
          })
        }
        {
          Array(lastDate).fill().map((_,i) => {
            return(
            <li key = {i} style={{backgroundColor : date === i +1 ? 'red' : null, borderRadious : date === i + 1 ? '30px' : null }}>{i + 1}</li>
            )
          })
        }
    
        </ul>
      </main>
    </div>
  </>
  )
}

export default Calendar