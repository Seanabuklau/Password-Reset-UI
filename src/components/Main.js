import React, {useState, useEffect} from 'react'
import Email from './Email'
import Authenticate from './Authenticate'
import Password from './Password'
import End from './End'
import Circle from './Circle'
import './Main.css'

function Main() {

    const formTitle = ["Reset your password", "OTP Authentication", "Change Password", "Success"]
    const steps = {1:"email",2:"smartphone",3:"lock",4:"check_mark"}

    const [page, setPage] = useState(0)
    const [circle] = useState(4)
    const [active, setActive] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(60/(circle-1)*active);
    },[circle, active])

    const arr = []
    for(let i=0;i<circle;i++){
        arr.push(
            <div className='steps'>
                <Circle classname={i<=active? "circle active": "circle"}>
                    <img src={i<=active ? `${steps[i+1]}.png` : `${steps[i+1]}_grey.png`} alt={`${steps[i+1]}`} height="15" width="15" />
                </Circle>
                <div className={i<=active ? "active" : ""}>
                    {i+1}
                </div>
            </div>
        )
    }

    const pageDisplay = () => {
        if(page===0){
            return <Email/>
        } else if (page===1){
            return <Authenticate/>;
        } else if (page===2){
            return <Password/>;
        } else {
            return <End/>
        }
    };

    const handleNext = ()=> {
        setPage(currPage=>currPage+1);
        if(active>=circle){
            setActive(circle)
        }else{
            setActive(active+1)
        }
    }

    const handlePrev = ()=> {
        setPage(currPage=>currPage-1);
        if(active<=0){
            setActive(0)
        }else{
            setActive(active-1)
        }
    }

  return (
    <div className='wrapper'>
        <form onSubmit={e => e.preventDefault()} className='content'>
            <div className='header'>
                <h3>{formTitle[page]}</h3>
            </div>
            <div className='progress-bar-container'>
                <div className='progress' style={{width:width + "%"}}></div>
                {arr}
            </div>
            <div className='body'>
                {pageDisplay()}
            </div>
            <div className='footer'>
                <div>
                    <button id={page===0 ? "disabled": ""} disabled={page===0} onClick={handlePrev}>
                        <span id={page===0 ? "disabled-icon": ""} className="arrow left">&lt;</span>
                    </button>
                    <button id={page===formTitle.length-1 ? "disabled": ""} disabled={page===formTitle.length-1} onClick={handleNext}>
                        <span id={page===formTitle.length-1 ? "disabled-icon": ""} className="arrow right">&gt;</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Main
