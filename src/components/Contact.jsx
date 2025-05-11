import React, { useState, useEffect } from "react";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Auto-dismiss success message after 5 seconds
    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                e.target.reset();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-6 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-4 text-gray-600">
                If you have any questions, feedback, or partnership ideas, feel free to reach out.
            </p>

            {isSubmitted && (
                <div
                    className="p-4 bg-green-100 text-green-700 rounded transition-opacity duration-500 ease-in-out animate-fade-in"
                >
                    ✅ Thank you! Your message has been sent successfully.
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-900"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-900"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="p-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-900"
                />

                {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </form>

            <div className="mt-6 text-sm text-gray-700">
                <p><strong>Email:</strong> contact@sightgallery.com</p>
                <p><strong>Location:</strong> Tokyo, Japan</p>
            </div>
        </div>
    );
};

export default Contact;
