import "../App.css";

const Titles = ({ title, size }) => {
  return (
    <div style={{ fontSize: { size } }} className="titles">
      {title}
    </div>
  );
};

export default Titles;
