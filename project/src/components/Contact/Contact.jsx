import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const eventOptions = [
  "Hack-a-LNCT", "Robowar", "Paper Presentation",
  "Street Play", "Group Dance", "Quiz-o-Mania",
  "Battle of Bands", "LAN Gaming"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    phone: '',
    email: '',
    events: [],
  });

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleEvent = (eventName) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventName)
        ? prev.events.filter(e => e !== eventName)
        : [...prev.events, eventName]
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful!");
      setFormData({ name: '', branch: '', phone: '', email: '', events: [] });
      setShowDropdown(false);
    } else {
      alert("Error: " + data.error);
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
};


  return (
    <div className="min-h-screen px-6 lg:px-60 py-12  font-[Comic_Sans_MS] flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white border-2 border-gray-300 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          
          <p className="mt-6 text-lg sm:text-xl font-bold text-pink-400 max-w-3xl mx-auto">
        Join us for the biggest cultural & technical extravaganza of the year!  
        
      </p>
      <br></br>
          <p className="text-gray-700 font-bold mt-2">Fill your details and select events you wish to register for.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 border border-gray-300 bg-white rounded-md" required />
          <input type="text" name="branch" placeholder="Your Branch" value={formData.branch} onChange={e => setFormData({ ...formData, branch: e.target.value })} className="w-full p-3 border border-gray-300 bg-white rounded-md" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} pattern="[0-9]{10}" className="w-full p-3 bg-white border border-gray-300 rounded-md" required />
          <input type="email" name="email" placeholder="Your Email ID" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 border border-gray-300 bg-white rounded-md" required />

          {/* Custom dropdown */}
          <div className="relative">
            <div
              className="w-full p-3 border border-gray-300 text-gray-400 rounded-md bg-white cursor-pointer flex justify-between items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className={`${formData.events.length === 0 ? 'text-gray-400' : ''}`}>
                {formData.events.length === 0 ? 'Select Event(s)' : formData.events.join(', ')}
              </span>
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </div>

            {showDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white text-gray-400 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {eventOptions.map((event, idx) => (
                  <label key={idx} className="flex items-center px-4 py-2  text-gray-400 hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3"
                      checked={formData.events.includes(event)}
                      onChange={() => toggleEvent(event)}
                    />
                    {event}
                  </label>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}

