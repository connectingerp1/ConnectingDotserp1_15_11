import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>OUR STUDENT'S ACHIEVEMENTS</h1>
      <div className="achievements-grid">
        <div className="achievement-item">
          <img src="/Acheivements/ach1.avif" alt="Achievement 1" />
        </div>
        <div className="achievement-item2">
          <img src="/Acheivements/ach2.avif" alt="Achievement 2" />
        </div>
        <div className="achievement-item">
          <img src="/Acheivements/ach3.avif" alt="Achievement 3" />
        </div>
        <div className="achievement-item">
          <img src="/Acheivements/ach3.avif" alt="Achievement 4" />
        </div>
        <div className="achievement-item5">
          <img src="/Acheivements/ach5.avif" alt="Achievement 5" />
        </div>
        <div className="achievement-item">
          <img src="/Acheivements/ach6.avif" alt="Achievement 6" />
        </div>
      </div>
    </div>
  )
}

export default Achievements
