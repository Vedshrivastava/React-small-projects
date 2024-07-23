import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">Have questions or feedback? Contact us using the form below:</p>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-semibold">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <label htmlFor="email" className="font-semibold">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 list-none" />
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea id="message" rows="4" placeholder="Type your message here" className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <ul className="list-none ml-6 mb-4">
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
