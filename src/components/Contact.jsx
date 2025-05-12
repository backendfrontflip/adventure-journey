import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d84a439b-d600-439c-9a23-88a1362d56a0", 
          ...formData,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-6 p-6 border rounded-lg shadow-md">
        <div className="reveal">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-6 reveal">
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="mb-4 text-gray-600 text-center">
                If you have any questions, feedback, or partnership ideas, feel free to reach out.
              </p>
            </div>

            <div className="flex justify-center flex-col gap-4 reveal">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 rounded border hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 rounded border hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="p-3 rounded border hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          <ToastContainer position="top-center" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-8 m-8 rounded-lg">
        <div className="max-w-screen-sm mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <FaInstagram className="text-3xl font-bold" />
            <a
              href="https://www.instagram.com/sightgallerydev" // Replace with your actual Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium"
            >
              Sight Galley Dev
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
