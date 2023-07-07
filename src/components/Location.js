import { Link } from "react-router-dom";
import "../style/location.css";

const Location = () => {
  return (
    <div className="location-page">
      <header>
        <h1>Our Location</h1>
        <span>
          {" "}
          <Link to={"/"}>Back</Link>
        </span>
      </header>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7423078735796!2d36.678048225756356!3d-1.3306979356779025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1cbc37d4ad6f%3A0x791cb7d233a2fc82!2sKaren%20Village!5e0!3m2!1sen!2ske!4v1683907561676!5m2!1sen!2ske"
        width="100%"
        height="900"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
