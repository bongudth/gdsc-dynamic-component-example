import React from 'react'
import './Form.scss'

function Form() {
  return (
    <div className='form-container'>
      <div className='form-section'>
        <div className='form-title'>Khảo sát sơ bộ</div>
        <div className='form-description'>GDSC là một cộng đồng, một sân chơi, môi trường cho các bạn thoả sức sáng tạo, thể hiện đam mê và học hỏi từ những thành viên thế hệ trước</div>

        <div className='form-question'>Bạn là sinh viên năm mấy?</div>
        <input className='form-input' placeholder='Nhập số' />
        <div className='form-error'>
          <i class="fas fa-exclamation-circle"></i>
          <div>Trường này chỉ có thể nhập số!</div>
        </div>

        <div className='form-question'>Các bạn đã tham gia GDSC được bao lâu rồi?</div>
        <div className='form-question-description'>Thời gian các bạn tham gia GDSC, tính theo thế hệ (generation)</div>
        <input type="radio" id="1" name="generation" value="1" />
        <label for="1">1 thế hệ</label>
        <br />
        <input type="radio" id="2" name="generation" value="2" />
        <label for="2">2 thế hệ</label>
        <br />
        <input type="radio" id="3" name="generation" value="3" />
        <label for="3">3 thế hệ</label>
        <br />
        <input type="radio" id="4" name="generation" value="4" />
        <label for="4">4 thế hệ</label>

        <div className='form-question'>Hãy nêu cảm nhận của bạn về thời gian vừa qua.</div>
        <div className='form-question-description'>Bạn có cảm thấy thoải mái không? Bạn có cảm thấy vui không? Bạn đã học được gì rồi? Bạn te... được bao nhiêu bug rồi?...hãy nói hết đi...</div>
        <textarea className='form-textarea' placeholder='Nhập chữ dài' />
      </div>
    </div>
  )
}

export default Form
