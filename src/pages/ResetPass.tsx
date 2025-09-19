import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Add async and API request
  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    navigate("/login");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    console.log(email);
  };

  return (
    <div>
      <form className="resetPassword" onSubmit={handleReset}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInput}
        />
        <button className="submitReset" type="submit">
          Reset password
        </button>
      </form>
      <Link className="goBack" to="/login">
        Back to login
      </Link>
    </div>
  );
}

export default ResetPassword;
