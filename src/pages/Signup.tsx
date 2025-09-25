import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Role from "../components/Role";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRole = (role: string) => {
    setUser((prev) => ({ ...prev, role }));
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    // API + await ok response before navigating to login
    navigate("/login");
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSignup}>
        <Input
          type="text"
          name="name"
          placeholder="Band/Artist name"
          value={user.name}
          onChange={handleInput}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
        />
        <Input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
          value={user.repeatPassword}
          onChange={handleInput}
        />

        <Role role={user.role} onRoleChange={handleRole} />

        <button className="submit" type="submit">
          Sign up
        </button>
      </form>
      <Link className="goBack" to="/">
        Back to start
      </Link>
    </div>
  );
}

export default Signup;
