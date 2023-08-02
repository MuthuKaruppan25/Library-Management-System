import "./home.css";
import image from "./image.jpg";
import img from "./cdlibrary.JPG";
import { useNavigate } from "react-router-dom";
function Img() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="HeroContainer">
        <div class="HeroBg">
          <img src={image} className="VideoBg" style={{ zIndex: "-1" }} />
        </div>
        <div class="HeroContent">
          <h1 class="HeroH1">Library Management System</h1>

          <div class="HeroBtnWrapper">
            <button
              type="button"
              name="button"
              class="NavBtnLink"
              onclick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Img;
