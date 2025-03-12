import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-6">
        Have a question or catering request? Fill out the form below!
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;