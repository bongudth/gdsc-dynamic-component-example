import React, { useEffect } from 'react'
import './Confetti.scss'
import { launchConfetti } from '../../utils/confetti'

function Confetti(props) {
  useEffect(() => {
    if (props.isShow) launchConfetti()
  }, [props.isShow])

  return (
    props.isShow && <div className='confetti-container'>Cảm ơn bạn đã điền form khảo sát!<br />Hãy mở cửa sổ console để xem kết quả!</div>
  )
}

export default Confetti
