const FadeInButton = ({ text, href, animationDuration }) => {
  return (
    <button
      style={{ animationDuration }}
      className="button fade-in"
      href={href}
    >
      {text}
    </button>
  );
};

export default FadeInButton;
