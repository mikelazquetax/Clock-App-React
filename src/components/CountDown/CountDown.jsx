import React, {useState, useEffect} from 'react';
import * as S from "./styles"

export default function CountDown() {
    const [sanFerminDays, setSanFerminDays] = useState("")

    
    const daysCalc = () =>{
      let dateSF = new Date('Jul 6, 2022 11:59:00').getTime()
    
      let day = new Date().getTime();
     
      let diffTime = dateSF - day;
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      let diffHours = Math.ceil((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let diffMins = Math.ceil((diffTime % (1000 * 60 * 60)) / (1000 * 60))
      let diffSecs = Math.floor((diffTime % (1000 * 60)) / 1000);

      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");
      console.log(diffHours + " Hours")
      console.log(diffMins + " Mins")
      console.log(diffSecs)
      setSanFerminDays(`Faltan ${diffDays} Días, ${diffHours} Horas, 
      ${diffMins} Minutos y ${diffSecs} Segundos Para los San Fermines  `)
    }
    
    useEffect(() =>{
      const runningClock = setInterval(() => daysCalc(), 1000)
      return function clean(){
          clearInterval(runningClock)
      }
    },[sanFerminDays])

  return (
  <S.SFstyles>
    
    <S.SFtitle>{sanFerminDays}</S.SFtitle>
    </S.SFstyles>
  )
}
