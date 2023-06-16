import React from 'react'

function Calendar() {
  //날짜 조회하기
  let d = new Date();
  console.log(d)
  let year = d.getFullYear(); //년
  let month = d.getMonth(); //월
  let day = d.getDate(); //일
  console.log(year, month, day);

  //말일 구하기(다음달 기준으로 조회해서 일값 = 0 하면 말일)
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  //달력에서 1일이 시작할 위치(요일값 = 0....6)
  let startDate = new Date(year, month, 1 ).getDate();

  return (
    <div className='calendar'>
      <header>
        <h2>{year}</h2>
        <span>{month + 1}월</span>
      </header>
      <main>
        <ul className='date'>
          {
            Array(lastDate).fill().map((_,i) => {
              return(
              <li key = {i}>{i + 1}</li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Calendar