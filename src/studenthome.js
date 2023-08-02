import "./adhome.css";
import { useNavigate, useLocation } from "react-router-dom";

import "rsuite";

const Studenthome = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleadd = () => {
    navigate("/addbook");
  };
  return (
    <div>
      <div class="Nav" id="Nav1" style={{ background: "black" }}>
        <div class="NavbarContainer">
          <img
            src=""
            alt="KEC"
            class="NavLogo"
            style={{ borderRadius: "100%", color: "white" }}
            onclick="rtohome()"
          />
          <div class="MobileIcon">
            <i class="fa fa-bars"></i>
          </div>
          <ul class="NavMenu ">
            <li
              style={{
                color: "white",
                paddingTop: "30px",
                marginLeft: "250px",
                fontFamily: "algerian",
              }}
              class="NavItem"
            >
              Welcome {props.text}{" "}
            </li>
          </ul>
          {/* <!-- <ul class="NavMenu ">
          <li class="NavItem"><a id="linkcolor" on class="NavLinks" href="#about">About</a></li>
          <li class="NavItem"><a id="linkcolor1" class="NavLinks" href="pricing.html">Pricing</a></li>
          <li class="NavItem"><a id="linkcolor2" class="NavLinks" href="#contact">Contact Us</a></li>
          <li class="NavItem"><a id="linkcolor3" class="NavLinks" href="signin.html">Sign in</a></li>
        </ul> --> */}
          <div class="NavBtn">
            <button
              type="button"
              name="button"
              class="NavBtnLink"
              onclick="logout()"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="content">
          <div class="card" onClick={() => navigate("/issuedbook")}>
            <div class="icon">
              <i class="material-icons md-36">Issued</i>
            </div>
            <p class="title">Issued Books</p>
            <p class="text">Know your issued books</p>
          </div>

          <div class="card" onClick="">
            <div class="icon">
              <i class="material-icons md-36">Returned</i>
            </div>
            <p class="title">Returned Books</p>
            <p class="text">Check your Returned Books</p>
          </div>

          <div class="card" onClick="">
            <div class="icon">
              <i class="material-icons md-36">add</i>
            </div>
            <p class="title">Add User</p>
            <p class="text">Add the users</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Studenthome;
