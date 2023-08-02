import "./home.css";
import image from "./cdlibrary.JPG";
function Details() {
  return (
    <div>
      <div class="InfoContainer" id="about">
        <div class="InfoWrapper">
          <div class="InfoRow">
            <div class="Column1">
              <div class="TextWrapper">
                <p class="TopLine" style={{ color: "black" }}>
                  World class facilities
                </p>
                <h1 class="Heading" style={{ color: "black" }}>
                  Best facilities with less prices
                </h1>
                <p class="Subtitle" style={{ color: "black" }}>
                  Cherish your hostel life with our hostels
                </p>
                <div class="BtnWrap">
                  <button
                    type="button"
                    name="button"
                    class="NavBtnLink"
                    onclick="return abc()"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div class="Column2">
              <div class="ImgWrap">
                <img class="Img" src={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
