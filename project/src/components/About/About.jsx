import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const eventData = {
  "2025-07-15": [
    { title: "Hack-a-LNCT", time: "10:00 AM", venue: "Auditorium", emoji: "👨‍💻" },
    { title: "Robowar", time: "2:00 PM", venue: "Main Ground", emoji: "🤖" },
    { title: "Paper Presentation", time: "5:00 PM", venue: "Room 305", emoji: "📄" },
  ],
  "2025-07-16": [
    { title: "Street Play", time: "11:00 AM", venue: "Amphitheater", emoji: "🎭" },
    { title: "Group Dance", time: "4:00 PM", venue: "Open Stage", emoji: "💃" },
  ],
  "2025-07-17": [
    { title: "Quiz-o-Mania", time: "12:00 PM", venue: "Seminar Hall", emoji: "🧠" },
    { title: "Battle of Bands", time: "6:00 PM", venue: "Rock Arena", emoji: "🎸" },
    { title: "LAN Gaming", time: "8:00 PM", venue: "Lab 2", emoji: "🎮" },
  ],
};

const EventPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // Flatten all events with date info
  const allEvents = Object.entries(eventData).flatMap(([date, events]) =>
    events.map(event => ({ ...event, date }))
  );

  // Filter based on event title
  const filteredEvents = allEvents.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen h-full  py-10 font-[Comic_Sans_MS] px-6 lg:px-40 flex flex-col">
      <div className="max-w-7xl mx-auto flex-1">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-500">Join us for the biggest cultural & technical extravaganza of the year! </h1>
          <br></br>
          <p className="text-xl text-gray-600 mt-4 font-bold max-w-3xl mx-auto">
           Explore all events! Register to join the fun.
          </p>
        </div>

        {/* Search Bar 
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search event by name (e.g. Hack, Dance)"
            className="w-full max-w-md p-3 border border-purple-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div> */}

        {/* Events Section with fixed height */}
        <div className="relative min-h-[700px] transition-all duration-300">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-xl p-6 min-h-[220px] flex flex-col justify-between hover:shadow-2xl transition duration-300"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-purple-500 mb-2">
                      {event.emoji} {event.title}
                    </h3>
                    <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
                    <p className="text-gray-600"><strong>Venue:</strong> {event.venue}</p>
                    <p className="text-gray-500 text-sm mt-1">📅 {event.date}</p>
                  </div>
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 self-start"
                  >
                    Register
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-gray-500 text-xl">No events found with that name.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
