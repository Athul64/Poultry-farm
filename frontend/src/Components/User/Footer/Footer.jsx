import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
    <div className='about'><h3>About Us</h3>
    <p>
        “In the quiet symphony of feathers and clucks,a poultry farm cultivates sustenance,weaving threads <br/>
         of life through the delicate balance of nurture and nourishment.Each dawn brings forth a chorus <br/>
         of awakening, where the sun's embrace ignites the dance of existence,harmonizing with the <br/>
         rhythms of nature's orchestration.”
    </p>

  </div>
    <div className='quick'><h3>Quick Links</h3>
     About Us <br/>
    <Link to='/help'className='hf'><span>Contact Us</span></Link>
     </div>
     </div>
  )
}

