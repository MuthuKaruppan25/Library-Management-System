import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = (handleregno) => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [regno, setregno] = useState("");
  const [Password, setPassword] = useState("");
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    setformerrors(validate(Name, regno, Password));
    Adduser(Name, regno, Password);
    handleregno(regno);
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      navigate("/home");
    }
  });

  const errors = {};
  const validate = (Name, regno, Password) => {
    const regex = "[0-9]{2}[A-Z]{3}[0-9]{3}";
    const pass = "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$";
    if (!regno) {
      errors.regno = "Regno is required";
    }
    if (!Password) {
      errors.Password = "Password is required";
    }
    if (!Name) {
      errors.Name = "Name is required";
    }

    return errors;
  };
  const Adduser = (Name, regno, Password) => {
    try {
      axios
        .post("http://localhost:8000/login", {
          regno,
          Password,
        })
        .then((res) => {
          if (res.data == "exist") {
            navigate("/studenthome", { state: { regno: regno } });
          } else if (res.data == "notexist") {
            alert("Invalid credentials");
          }
        })
        .catch((e) => {
          alert("Invalid credentials");
          console.log(e);
        });
    } catch (e) {}
  };

  return (
    <div>
      <div className="center">
        <h1 style={{ fontSize: "30px" }}>Register Here!</h1>

        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="email"
            onChange={(e) => {
              setregno(e.target.value);
            }}
            type="text"
            placeholder="Regno"
          />
        </div>
        <p>{formerrors.regno}</p>
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
        <input
          type="submit"
          onClick={handleSubmit}
          value="Login"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      </div>
    </div>
  );
};
export default Login;
