import { useState } from "react";
import Input from "../components/Input";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
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

        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
