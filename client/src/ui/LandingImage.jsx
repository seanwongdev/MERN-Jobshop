import homeImg from "../assets/homeImg.jpg";

function LandingImage({ imagePath }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: -160,
    right: -151,
    zIndex: 0,
    height: "300%",
    width: "67%",
  };

  return <div className="hidden md:grid" style={backgroundImageStyle}></div>;
}

export default LandingImage;
