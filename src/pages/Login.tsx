import { Link } from "react-router-dom";
import Input from "../components/Input";

// Uncomment everything when API is in place

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(credentials),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       localStorage.setItem("token", data.token);
  //       navigate("/dashboard");
  //     } else {
  //       setError(data.message || "Login failed");
  //     }
  //   } catch (err) {
  //     setError("Server error");
  //   }
  // };

  /*
    ----------------------------
    Remove when API is in place
    ----------------------------
  */
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    console.log("Logging in");
  };
  /*
    ----------------------------
    Remove when API is in place
    ----------------------------
  */

  return (
    <div className="loginContainer">
      {/* <form className="loginForm" onSubmit={handleSubmit}> */}
      <form className="loginForm" onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleInput}
        />

        <button className="submit" type="submit">
          Login
        </button>
      </form>
      <div className="noAccountContainer">
        <Link className="signUp" to="/signup">
          Not a member yet? Join us
        </Link>
      </div>
      <Link className="forgotPassword" to="/signup">
        Forgot your password?
      </Link>
      {/* {error && <p className="error">{error}</p>} */}
    </div>
  );
}

export default Login;
