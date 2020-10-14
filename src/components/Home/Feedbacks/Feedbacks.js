import React, { useEffect, useState } from 'react'
import Feedback from '../Feedback/Feedback'

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/getAllFeedback')
      .then((response) => response.json())
      .then((result) => setFeedbacks(result))
  }, [])
  return (
    <>
      <h2 className="text-center mt-5">
        Clients <span style={{ color: '#9bc582' }}>Feedback</span>
      </h2>
      <div className="row">
        {feedbacks.map((feedback) => (
          <Feedback feedback={feedback} key={feedback._id}></Feedback>
        ))}
      </div>
    </>
  )
}

export default Feedbacks
