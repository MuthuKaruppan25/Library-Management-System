import "./home.css";
function Footer() {
  return (
    <div>
      <div class="FooterContainer" id="contact">
        <div class="FooterWrap">
          <div class="FooterLinksContainer">
            <div class="FooterLinksWrapper">
              <div class="FooterLinkItems">
                <h1 class="FooterLinkTitle" style={{ marginBottom: "10%" }}>
                  About Us
                </h1>
                <a
                  href="aboutme.php"
                  class="FooterLink"
                  style={{ marginBottom: "8%" }}
                >
                  Developers
                </a>
                <a
                  href="#about"
                  class="FooterLink"
                  style={{ marginBottom: "8%" }}
                >
                  Services
                </a>
                <a
                  href="pricing.php"
                  class="FooterLink"
                  style={{ marginBottom: "8%" }}
                >
                  Pricing
                </a>
                <a
                  href="/admin"
                  style={{ marginBottom: "8%" }}
                  class="FooterLink"
                >
                  Admin
                </a>
              </div>
            </div>
          </div>

          <div class="SocialMedia">
            <div class="SocialMediaWrap">
              <a href="#" class="SocialLogo">
                HMS
              </a>
              <p class="WebsiteRights">KEC © 2023</p>
              <div class="SocialIcons">
                <a
                  href="https://www.facebook.com/kec.erode/"
                  class="SocialIconLink"
                >
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com/konguofficial?lang=en"
                  class="SocialIconLink"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/konguengineeringcollege/?hl=en"
                  class="SocialIconLink"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                {/* <!-- <a href="https://www.youtube.com/c/konguengineeringcollege" class="SocialIconLink"><i class="fa-brands fa-youtube" aria-hidden="true"></i> </a> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
