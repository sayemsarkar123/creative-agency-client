import React from 'react'

const TrustedUs = () => {
  const companyLogos = [
    'https://i.ibb.co/HhLXr4m/airbnb.png',
    'https://i.ibb.co/pRdkTYj/google.png',
    'https://i.ibb.co/tctRq2m/netflix.png',
    'https://i.ibb.co/DVmmkdg/slack.png',
    'https://i.ibb.co/88j87N4/uber.png',
  ]
  return (
    <>
      <div className="row align-items-center">
        {companyLogos.map((logo, idx) => (
          <div key={idx} className="col">
            <img style={{ maxWidth: '100px' }} src={logo} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default TrustedUs
