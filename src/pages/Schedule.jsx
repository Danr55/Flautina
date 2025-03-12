const schedule = [
    { day: "Monday", location: "Main Street, Downtown", time: "11 AM - 3 PM" },
    { day: "Wednesday", location: "City Park", time: "12 PM - 4 PM" },
  ];
  
  const Schedule = () => {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Where to Find Us</h2>
        <ul>
          {schedule.map((slot, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl">{slot.day}</h3>
              <p>{slot.location} - {slot.time}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Schedule;