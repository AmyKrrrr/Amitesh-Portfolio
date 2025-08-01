import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : "false"} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
