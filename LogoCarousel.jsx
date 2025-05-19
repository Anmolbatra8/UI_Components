import "./LogoCarousel.css";

const LogoCarousel = ({ logoLinks, logoMainHeading }) => {
  return (
    <div className="LC-parent">
      <div className="LC-main">
        <div className="LC-heading-container">
          <h3 className="LC-heading-text"> {logoMainHeading}</h3>
        </div>
        <div className="LC-logo-Parent-container">
          {logoLinks.map((logo) => (
            <div key={logo} className="LC-logo-container">
              <img
                src={logo}
                className="LC-logoImg"
                alt="logo of brands associated"
              />
            </div>
          ))}
        </div>
        {/* Main container end */}
      </div>

      {/* Parent container end */}
    </div>
  );
};

export default LogoCarousel;
