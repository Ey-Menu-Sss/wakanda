import React from 'react'
import instagram from '../assets/instagram.svg'
import dribble from '../assets/dribble.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import send from '../assets/send.svg'

const footer = () => {
  return (
    <div>
      <footer id="main-footer">
      <div class="container">
        <div class="flex">
          <div>
            <img
              class="footer-logo"
              src="images/icons/Logo-footer.svg"
              alt="Logo"
            />
            <span class="footer-logo-name">Wakanda</span>
            <nav class="footer-socials">
              <ul>
                <li>
                  <a href="#"
                    ><img src={instagram} alt="instagram"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src={dribble}  alt="dribble"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src={twitter}  alt="twitter"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src={youtube}  alt="youtube"
                  /></a>
                </li>
              </ul>
              <p>Copyright &copy; 2022 Wakanda. All rights reserved</p>
            </nav>
          </div>
          <nav class="footer-nav">
            <ul>
              <h5>Company</h5>
              <li><a href="#">Lorem.</a></li>
              <li><a href="#">Molestiae.</a></li>
              <li><a href="#">Unde.</a></li>
              <li><a href="#">Soluta?</a></li>
              <li><a href="#">Praesentium?</a></li>
            </ul>
            <ul>
              <h5>Support</h5>
              <li><a href="#">Lorem.</a></li>
              <li><a href="#">Laborum.</a></li>
              <li><a href="#">Pariatur?</a></li>
              <li><a href="#">A.</a></li>
              <li><a href="#">Ex.</a></li>
            </ul>
          </nav>
          <form action="/newsletter">
            <label for="email">Subscribe to our newsletter</label>
            <div class="footer-input-wraper">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                required
              />
              <img src={send} alt="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer
