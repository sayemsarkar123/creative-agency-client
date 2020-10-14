import React from 'react'
import Feedbacks from '../Feedbacks/Feedbacks'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import OurWorks from '../OurWorks/OurWorks'
import Services from '../Services/Services'
import TrustedUs from '../TrustedUs/TrustedUs'

const Home = () => {
  return (
    <>
      <section
        style={{
          background: '#fad062',
          clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0% 100%)',
        }}
        className="pt-3 pb-5"
      >
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-12">
              <Header></Header>
            </div>
            <div className="col-md-12">
              <Hero></Hero>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <TrustedUs></TrustedUs>
          </div>
          <div className="col-md-12 mt-5">
            <Services></Services>
          </div>
        </div>
      </div>
      <section style={{ background: '#111430' }}>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-11 ml-auto mt-5">
              <OurWorks></OurWorks>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Feedbacks></Feedbacks>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mt-5" style={{ background: '#fad062' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
