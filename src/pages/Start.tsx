import { Link } from "react-router-dom";
import "../styles/start.css";

function Start() {
  return (
    <div>
      <div className="heroContainer">
        <h2 className="heroTitle">
          Where bands and artists connect, collaborate, and grow together.
        </h2>
        <p className="heroText">
          Build your profile, share your music, and team up with other creators
          on a stage made for collaboration.
        </p>
        <p className="heroText">
          Discover new sounds, meet new bandmates, and experience the scene like
          never before.
        </p>
      </div>
      <div className="linkContainer">
        <Link className="linkButton" to="/login">
          Login
        </Link>
        <Link className="linkButton" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Start;
