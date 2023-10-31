import React from "react";

export const Header = (props) => {
  const backgroundImage = "https://raahtechservices.com/branding/bg3.jpg";
  const title = "PROFESSIONAL SOLUTIONS FOR YOUR BUSINESS";
  const content = "Welcome to Raah Tech Services! We provide innovative IT solutions. With a customer-centric approach and vast industry experience, we maximize your online presence and achieve unparalleled success. Partner with us to unlock your business's full potential in today's competitive landscape. Let's pave your way to excellence in technology and beyond.";

  return (
    <header id="header">
     <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
    </header>
  );
};
