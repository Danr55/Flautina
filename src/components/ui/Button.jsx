const Button = ({ text, onClick }) => {
    return (
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;