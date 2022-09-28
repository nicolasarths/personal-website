const JumpingButton = ({ text, href }) => {
  return (
    <button
      className="button jumping-button"
      onClick={() => (location.href = href)}
    >
      {text}
    </button>
  );
};

export default JumpingButton;
