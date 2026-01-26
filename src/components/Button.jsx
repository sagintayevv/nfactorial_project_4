const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white"
      >
        <span>+</span>
      </button>
    </>
  );
};
export default Button;
