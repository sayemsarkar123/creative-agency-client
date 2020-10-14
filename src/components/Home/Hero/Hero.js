import React from 'react';

const Hero = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-4">
        <div>
          <h1 style={{color: '#10132f'}} className="font-weight-bold">Let’s Grow Your Brand To The Next Level</h1>
          <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
          <button style={{background: '#10132f'}} className="btn text-white px-5">Hire us</button>
        </div>
      </div>
      <div className="col-md-7 ml-auto">
        <img className="img-fluid" src="https://i.ibb.co/fxrtQtQ/Frame.png" alt=""/>
      </div>
    </div>
  );
};

export default Hero;
