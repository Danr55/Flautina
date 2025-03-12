const Card = ({ title, description }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;