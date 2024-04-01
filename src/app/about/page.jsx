import React from 'react';
export const metadata = {
  title: "About Page",
  description: "About page description",
};


const AboutPage = () => {
  return (
     <div className='about_wrapper'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
              <div className='about-left-col'>
                <h6>Abou Agency</h6>
                <h1>We Have More Than 20+ Years Of Practical Finance Industries</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur blanditiis nobis laudantium aliquid repellendus? Quisquam, porro pariatur voluptatum corporis eum dolorum eveniet minima illum vero, at voluptate veritatis, quibusdam excepturi.</p>
              </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-right-img'>
              <img src="/home-hero.png" alt="" />
            </div>
          </div>
        </div>
     </div>
  )
}

export default AboutPage
