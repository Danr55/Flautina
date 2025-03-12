import Card from "../components/ui/Card";

const menuItems = [
  { name: "BBQ Pulled Pork", description: "Smoky, juicy, and flavorful." },
  { name: "Street Tacos", description: "Three delicious tacos with fresh ingredients." },
];

const Menu = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
      <div className="grid gap-4">
        {menuItems.map((item, index) => (
          <Card key={index} title={item.name} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Menu;