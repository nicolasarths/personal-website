const JumpingButton = ({ text, onClick }) => {
  return (
    <button
      className="button jumping-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default JumpingButton;
