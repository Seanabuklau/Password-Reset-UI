import React, {useState, useEffect} from 'react'
import './Authenticate.css'

function Authenticate() {

  const [time, setTime] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const interval = time > 0 && setInterval(()=>{
      setTime(time=>time-1)}, 1000);
      return ()=> clearInterval(interval);
    },[time])

  function handleClick() {
    setLoading(true);
    setTime(30);
    setTimeout(()=>setLoading(false),31000)
  }

  const move = (e) =>{
    if(e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus();
    }
    if(e.key==='Backspace' && e.target.previousSibling){
      e.target.previousSibling.focus();
    }
  }

  return (
    <div className='auth-container'>
      <div className='auth-content'>
        <p>Enter 6 digit pin from the authenticator app:</p>
        <div className='auth-pin-input'>
          <input type='text' maxLength="1" onKeyUp={move} autoFocus/>
          <input type='text' maxLength="1" onKeyUp={move}/>
          <input type='text' maxLength="1" onKeyUp={move}/>
          <input type='text' maxLength="1" onKeyUp={move}/>
          <input type='text' maxLength="1" onKeyUp={move}/>
          <input type='text' maxLength="1" onKeyUp={move}/>
        </div>
        <button onClick={handleClick} disabled={loading}>Get OTP in {time}s</button>
      </div>
    </div>
  )
}

export default Authenticate
