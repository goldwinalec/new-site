import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__inner'>
          <h1 className='hero__title'>
            Hi! I'm <br />
            Alina Gladkova
            <span className='hero__text'>A Web Developer</span>
          </h1>
          {/* <img className='hero__img' src='/images/main-img.jpg' alt='' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
