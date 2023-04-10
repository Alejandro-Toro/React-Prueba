import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="divContact">
      <h2>Please contact us</h2>
      <image src="" alt="" />
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
        <label>Description</label>
        <input type="text" placeholder="Enter message" />
        <Link to="/NotFound">
          <button>Send</button>
        </Link>
      </form>
    </div>
  );
};

export default Contacto;
