import React from 'react'
import './Confetti.scss'

function Confetti(props) {
  return (
    props.isShow && <div className='confetti-container'>Cảm ơn bạn đã điền form khảo sát!<br />Hãy mở cửa sổ console để xem kết quả!</div>
  )
}

export default Confetti
