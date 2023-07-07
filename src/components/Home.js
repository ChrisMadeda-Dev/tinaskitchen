import { useState } from "react";
import image from "../images/1.jpeg";
import "../style/home.css";
import Header from "./Header";
import Titles from "./Titles";
import { Link } from "react-router-dom";

function ContactUsSec() {
  return (
    <div className="contact-us-sec">
      <span> Contact Tinas Kitchen</span>
      <ul className="flex-col">
        <li> Message</li>
        <li> Phone</li>
        <li> Whatsapp</li>
        <li> Facebook</li>
        <li> Email</li>
      </ul>
    </div>
  );
}

function MainHeader({ showContactUs, setShowContactUs }) {
  const linkStyle = { textDecoration: "none", color: "black" };
  return (
    <div className="main-header">
      <section>
        <img src={require("../images/logo.jpg")} />
        <h1>
          <span>Tinas</span> Kitchen
        </h1>
      </section>
      <ul>
        <li>
          <Link to="/menu" style={linkStyle}>
            Menu
          </Link>
        </li>
        <li onClick={setShowContactUs}>
          <span>{!showContactUs ? "Contact Us" : "Close"}</span>
          {showContactUs && <ContactUsSec />}
        </li>
        <li>
          <Link to="location" style={linkStyle}>
            Location
          </Link>
        </li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

function IntroSec() {
  return (
    <div>
      <div className="intro-sec">
        <div className="intro-text">
          <img src={require(`../images/logo.jpg`)} />

          <p>
            Taste the magic at Tina's Kitchen <br /> a culinary oasis where
            flavors come <br /> alive. Bon appétit!
          </p>
          <button className="intro-btn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

function DisplaySec() {
  return (
    <div>
      <div className="display-sec">
        <section>
          <img src={require(`../images/4.jpg`)} />
          <img src={require(`../images/3.jpg`)} />
        </section>
        <section>
          <img src={require(`../images/5.jpg`)} />
        </section>
      </div>
      <div className="display-sec-2">
        <img src={require(`../images/1.jpg`)} />
        <img src={require(`../images/2.jpg`)} />
        <img src={require(`../images/1.jpg`)} />
        <img src={require(`../images/2.jpg`)} />
      </div>
    </div>
  );
}

function PresentationSec() {
  return (
    <div className="presentation-sec">
      <div className="prs-cont">
        <img src={require(`../images/1.jpg`)} />
        <img src={require(`../images/2.jpg`)} />
        <img src={require(`../images/1.jpg`)} />
      </div>
    </div>
  );
}

function MenuSec() {
  return (
    <div className="menu-sec">
      <section>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
        <div className="menu-item">
          <img src={require(`../images/1.jpg`)} />
          <div>
            <h2>Smoked Fish</h2>
            <p>
              Many owrds words words words more wordfs typen here another text
              here, Many owrds words words words
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function LocationSec() {
  return (
    <div className="location-sec">
      <section>
        <h2>Contact Us On</h2>
        <li>Telphone: 0700000000</li>
        <li>Email : TinasEmail@gmail.com</li>
        <li>Location : Karen Village</li>
      </section>
      <section>
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.743741052806!2d36.67779507595341!3d-1.3298113986575755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1cbc37d4ad6f%3A0x791cb7d233a2fc82!2sKaren%20Village!5e0!3m2!1sen!2ske!4v1688467397906!5m2!1sen!2ske"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

const Home = () => {
  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <div className="home-page">
      <MainHeader
        showContactUs={showContactUs}
        setShowContactUs={(e) => setShowContactUs(!showContactUs)}
      />
      <div className="landing-section"></div>

      <IntroSec />
      <PresentationSec />
      <MenuSec />
      <LocationSec />
      <footer>
        <h2>Tinas Kitchen</h2>
        <p>Your Restaurant of choice</p>
        <p>Brought to you by JEAMDEV</p>
      </footer>
    </div>
  );
};

export default Home;

//git remote add origin https://github.com/ChrisMadeda-Dev/tinaskitchen.git
//git branch -M main
//git push -u origin main
