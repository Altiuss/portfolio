import { links, socials } from './data'

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(flink => <li key={flink.id}><a href={flink.link}>{flink.title}</a></li>)
          }
        </ul>
        <div className="footer__socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target='_blank' 
            rel='noopener noreferrer'>{social.icon}</a> )
          }
        </div>
      </div>
      <div className="footer__copyright">
        <small>2025 AIGARS TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer