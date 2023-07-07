import { Link } from "react-router-dom";
import "../style/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <header>
        <h1>Menu</h1>
        <span>
          {" "}
          <Link to="/">Back</Link>
        </span>
      </header>
      <ul className="flex-col">
        <li>Fish.......................500</li>
        <li>Fish..............................................5500</li>
        <li>Fish..............................................5500</li>
        <li>Fish..............................................5500</li>
        <li>Fish..............................................5500</li>
        <li>Fish..............................................5500</li>
        <li>Fish..............................................500</li>
      </ul>
    </div>
  );
};

export default Menu;
