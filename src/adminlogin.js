import "./adminlogin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    setformerrors(validate(Email, Password));
    if (Email == "muthu@gmail.com" && Password == "123456") {
      setIsSubmit(true);
    }
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      navigate("/Home");
    }
  });

  const errors = {};
  const validate = (Email, Password) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pass = "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$";
    if (!Email) {
      errors.Email = "Email is required";
    } else if (!regex.test(Email)) {
      errors.Email = "This is not valid email";
    }
    if (!Password) {
      errors.Password = "Password is required";
    }

    return errors;
  };
  return (
    <div>
      <div class="center">
        <h1>Admin Login</h1>

        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
          />
        </div>
        <p>{formerrors.Email}</p>
        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </div>
        <p>{formerrors.Password}</p>
        <div class="pass">Forgot Password?</div>
        <input
          type="submit"
          value="Login"
          onClick={handleSubmit}
          style={{ marginTop: "10px" }}
        />
        <div class="signup_link">
          Not a member? <a href="/">Signup</a>
        </div>
      </div>
    </div>
  );
};
export default Admin;
