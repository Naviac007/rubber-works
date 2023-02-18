import React from 'react'
import { useEffect } from 'react'
import './Footer.css'
function Footer() {
    useEffect(()=>{
        const year = document.getElementById("year");
        year.textContent = new Date().getFullYear();

    },[])
  return (
    <footer>

    <div class="footer-content">

      <h3>Rashmi Rubber Works</h3>
      <h4> One stop solution for all your rubber work needs.</h4>
      <p>
       
        Gala No. 230-1/1-C, Ramabai Ambedkar, Nagar, Eastern Expresxs Highway,
        Ghatkopar (E), Mumbai - 400075 
      </p>
{/* 
      <ul class="socials">

        <li><a href="#"><i class="fa fa-facebook"></i></a></li>

        <li><a href="#"><i class="fa fa-twitter"></i></a></li>

        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>



      </ul> */}

    </div>

    <div class="footer-bottom">

      <p>Copyright &#169;<span id="year"></span> <a href="#Products">Rashmi Rubber Works</a> </p>

    </div>

  </footer>
  )
}

export default Footer