import React from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/home");
  };

return (
    <div
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
        }}
        onClick={handleNavigation}
    >
        <img
            src="/pics/bannerlogo.png" // Replace with the correct path to your image
            alt="Splash"
            style={{ maxWidth: "100%", maxHeight: "100%", cursor: "pointer", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "repeat" }}
        />
    </div>
);
};

export default SplashPage;
