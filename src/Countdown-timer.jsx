import './App.css';
import { useEffect, useState } from 'react';

export default function App(){

  const [hr, setHr] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let timer;
    if(isRunning)
    {
     timer =  setInterval(()=>{
          if(sec>0)
          {
            setSec(prev=>prev-1);
          }
          else if(min>0)
          {
            setMin(prev=>prev-1);
            setSec(59);
          }
          else if(hr>0)
          {
            setHr(prev => prev - 1);
            setMin(59);
            setSec(59);
          }
          else
          {
            clearInterval(timer);
            setIsRunning(false);
          }
      },1000);
    }
    return (()=>clearInterval(timer))
  },[hr,min,sec,isRunning])

  function Clicked()
  {
      setIsRunning(true);
  }
  function ResetTimer()
  {
    setIsRunning(false);
    setHr(0);
    setMin(0);
    setSec(0);
  }
  function PauseTimer()
  {
    setIsRunning(false);
  }

  return(
    <div id='main-container'>
      <h1>Timer counter</h1>
      <div>
        <p>Hours</p>
        <input 
          type="number"
          placeholder='00'
          value={hr}
          onChange={(e)=>setHr(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>Minutes</p>
        <input 
          type="number"
          placeholder='00'
          value={min}
          onChange={(e)=>setMin(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>Seconds</p>
        <input 
          type="number"
          placeholder='00'
          value={sec}
          onChange={(e)=>setSec(parseInt(e.target.value))}
        />
      </div>   
    <button onClick={Clicked}>Start</button>   
    <button onClick={ResetTimer}>Reset</button>   
    <button onClick={PauseTimer}>Pause</button>   
    </div>
  )
}