import React, {useState, useRef} from 'react'
import './Password.css'

function Password() {

  const pwdStrength = {1:"Weak", 2:"Fair",3:"Good", 4:"Strong", 5:"Very Strong"}
  const pwdStrengthIndicator = {
    "Password must be a minimum of 8 characters":0, 
    "Please input a valid password":0,
    "Weak":20, 
    "Fair":40, 
    "Good":60, 
    "Strong":80, 
    "Very Strong":100
  }

  const [pwdFill, setPwdFill] = useState(false);

  const pwdInput1 = useRef("")
  const pwdInput2 = useRef("")

  const [error, setError] = useState("")
  const [match, setMatch] = useState("")

  const [isMatch, setIsMatch] = useState(false)

  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleChange1 = () => {
    let count = 0
    const password1 = pwdInput1.current.value
    const password2 = pwdInput2.current.value

    if(password1===password2){
      setIsMatch(true)
      setMatch("Passwords match ✔")
    } else{
      setIsMatch(false)
      setMatch("Passwords do not match")
    }

    if(!password1){ 
      setPwdFill(false)
      setError("Please input a valid password")
      setIsMatch(false)
      setMatch("Please input a valid password above")
    } else if(password1.length < 8){
      setPwdFill(false)
      setError("Password must be a minimum of 8 characters")
    } else{
      setPwdFill(true)
      if(password1.length >= 12){
        count += 1
      }
      if(/(?=.*[a-z])/.test(password1)){
        count += 1
      }
      if(/(?=.*[A-Z])/.test(password1)){
        count += 1
      }
      if(/(?=.*\d)/.test(password1)){
        count += 1
      }
      if(/(?=.*[-+_!@#$%^&*., ?])/.test(password1)){
        count += 1
      }
      setError(pwdStrength[count])
    }
  }

  const handleChange2 = () => {
    const password1 = pwdInput1.current.value
    const password2 = pwdInput2.current.value
    if(!password1){
      setMatch("Please input a valid password above")
    }
    if(password1===password2){
      setIsMatch(true)
      setMatch("Passwords match ✔")
    }else{
      setIsMatch(false)
      setMatch("Passwords do not match")
    }
  }

  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
    setIsClicked1(!isClicked1);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
    setIsClicked2(!isClicked2);
  };

  return (
    <div className='pwd-container'>
      <p>Please enter your new password:</p>
      <div className={pwdFill ? 'pwd-div-1 show' : 'pwd-div-1 none'}>
        <input ref={pwdInput1} type={passwordShown1 ? "text" : "password"} size="35" className="pwd" onChange={handleChange1} required/>
        <span onClick={togglePassword1} className='show-hide-span'>{isClicked1 ? "Hide" : "Show"}</span>
        <div className="underline"></div>
        <label><small>New Password *</small></label>
        <span className={pwdFill ? "blue":"red"}>{pwdFill ? `Password strength: ${error}`:`${error}`}</span>
        <div className="pwd-strength" style={{width:pwdStrengthIndicator[error] + "%"}}></div>
      </div>
      <div className='pwd-div-2'>
        <input ref={pwdInput2} type={passwordShown2 ? "text" : "password"} size="35" className="pwd" onChange={handleChange2} required/>
        <span onClick={togglePassword2} className='show-hide-span'>{isClicked2 ? "Hide" : "Show"}</span>
        <div className="underline"></div>
        <label><small>Confirm Password *</small></label>
        <span className={isMatch ? "green":"red"}>{match}</span>
      </div>
    </div>
  )
}

export default Password