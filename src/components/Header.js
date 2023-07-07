import "../App.css";

const Header = () => {
  return (
    <div className="main-header">
      <section>
        <h1>Tinas Kitchen</h1>
      </section>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Our Location</li>
        <a href=".details-sec">Home</a>
      </ul>
    </div>
  );
};

export default Header;
