import React, { useState } from "react";
import { FaArrowRight, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      formErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim())
      formErrors.message = "Your message cannot be empty.";
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            access_key: "2e87e991-b0d8-4c45-8efb-b653ffa7a54c",
          }),
        });
        const result = await res.json();
        if (result.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="space-y-5 p-6 mt-5" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="space-y-1">
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <label className="block text-gray-700 font-medium">Your Name</label>
        </div>
        <div className="border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
          <input
            className="w-full focus:outline-none bg-transparent"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-gray-500" />
          <label className="block text-gray-700 font-medium">Your Email</label>
        </div>
        <div className="border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
          <input
            className="w-full focus:outline-none bg-transparent"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <div className="flex items-center">
          <FaComment className="mr-2 text-gray-500" />
          <label className="block text-gray-700 font-medium">
            How may we help you?
          </label>
        </div>
        <div className="border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
          <textarea
            className="w-full focus:outline-none bg-transparent"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        text={
          <span className="flex items-center justify-center gap-2">
            Send Message <FaArrowRight size={16} />
          </span>
        }
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-300 transition-all duration-300 flex items-center justify-center font-semibold"
      />

      {/* Success Message */}
      {submitted && (
        <p className="text-green-500 text-sm mt-2">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default Form;
