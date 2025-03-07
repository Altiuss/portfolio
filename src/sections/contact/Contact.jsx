import contacts from './data'
import './contact.css';

function Contact() {
  return (
    <section id="contact" >
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div data-aos="zoom-in" className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} 
            target='_blank' rel='noopener noreferrer'> {contact.icon}</a>)
        }

      </div>
    </section>
  )
}

export default Contact