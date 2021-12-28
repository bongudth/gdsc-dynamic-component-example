import React from 'react'
import './Information.scss'

function Information() {
  return (
    <div className='information-wrapper'>
      <div className='information-container'>
        <div className='information-title'>Form khảo sát tình hình học tập các thành viên GDSC - DUT</div>
        <div className='information-description'>Sau một khoảng thời gian hoạt động, GDSC xin được khảo sát các bạn thành viên yêu mến về tình hình học tập và rèn luyện của các bạn tại GDSC.</div>
      </div>
      <div className='information-action'>
        <button className='information-button'>Mục trước</button>
        <button className='information-button'>Mục sau</button>
      </div>
    </div>
  )
}

export default Information
