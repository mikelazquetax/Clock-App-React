import React, {useState, useEffect} from 'react'

export default function StopWatch() {

        const [time, setTime] = useState(0);
 
        const [cronosOn, setCronosOn] = useState(false)
        const [text, setText] = useState('START')
        
      


        const Cronos = (cronosOn) =>{
            if(cronosOn === true){
                console.log('StopWatch is paused')
                setCronosOn(false)
                setText('START')
            }else{
                console.log('StopWatch is running')
               
                setCronosOn(true)
                setText('STOP')
                
            }

        }

        useEffect(()=>{
            let interval = null
           
            if(cronosOn){
                interval = setInterval(()=>{
                    setTime((prevTime) => prevTime + 10)
                },10) 
                   
            }else{
                clearInterval(interval)                
            }
            return () => clearInterval(interval)
        },[cronosOn])

  return (
    <div>
        <h1>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </h1>
        <button onClick={() => Cronos(cronosOn)}>{text}</button>
        <button onClick={() => setTime(0)}>RESET</button>
    </div>
  )
}
