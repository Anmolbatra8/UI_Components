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

/*
Sample Data For Test Rendering Locally Fast:
You can copy paste below snippet to get started: 

export const ClientLogos = [
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637680/Suzuki_SVG_zn9zhj.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637680/Rolls_Royce_SVG_cis5oc.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637680/Jeep_SVG_bipllq.svg",
    
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637706/Mercedes_SVG_qnthrd.svg",
   
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637681/Tata_SVG_z8j89w.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637680/KIA_SVG_lluume.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637678/Audi_SVG_lc5xhj.svg",
    
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637678/BMW_Svg_duvqud.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637678/Fiat_SVG_ztqqja.svg",
    "https://res.cloudinary.com/dyabjxxzp/image/upload/v1747637678/Ford_SVG_ix6jt5.svg",
]

     <LogoCarousel
     logoMainHeading={"Modifying Accross Brands"}
     logoLinks={ClientLogos}
     />
*/
