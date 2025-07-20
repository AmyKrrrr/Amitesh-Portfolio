import React from "react";
import "./Hero.css";
import TitledCard from "./TitledCard";

const Hero = () => {
  return (
    <section className="hero-section">
      <TitledCard
        imageSrc="/images/AmyChibi.png"
        altText="Amitesh Kar - Chibi"
        captionText="Amitesh Kar - Chibi"
        containerHeight="380px"
        containerWidth="380px"
        imageHeight="380px"
        imageWidth="380px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
      <div className="hero-text-content">
        <h1 className="hero-heading">
          Heyy... I am <span className="highlight">Amitesh</span>
        </h1>

        <p className="hero-description">
          I'm a CSE student and DSA enthusiast, passionate about solving
          problems and exploring tech. On a journey to build impactful projects
          and dive deeper into AI and development.
        </p>
      </div>
    </section>
  );
};

export default Hero;
