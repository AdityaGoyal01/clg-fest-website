import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
       <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col items-center justify-center px-6 py-12 ">
  {/* Hero Section */}
  <aside className="relative overflow-hidden text-center  sm:py-10 w-full">
    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Heading */}
      <h1  
        className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg  mb-8 px-6 py-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent"
      >
        LNCTU Fest 2025 <br />
        <span className="text-yellow-400">Celebrate. Compete. Connect.</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg sm:text-xl font-bold text-gray-700 max-w-3xl mx-auto">
        Join us for the biggest cultural & technical extravaganza of the year!  
        From electrifying performances and creative showcases to hackathons and gaming marathons,  
        this fest brings together passion, innovation, and fun all in one place.
      </p>
    </div>
  </aside>

  {/* About & Theme Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About */}
          <div>
            <h2 className="text-4xl font-bold mb-6 ">About the Fest</h2>
            <p className="text-lg leading-relaxed">
              LNCT Fest 2025 is the ultimate celebration of talent, creativity,
              and cultural diversity. Bringing together students from all
              disciplines, it’s a platform to showcase skills, make memories, and
              enjoy unforgettable experiences.
            </p>
          </div>

          {/* Theme */}
          <div className="text-right">
            <h2 className="text-4xl font-bold mb-6">Theme 2025</h2>
            <p className="text-lg leading-relaxed">
              The theme of this year’s fest is <b>"Lights of Unity"</b>
              symbolizing how different talents, cultures, and passions unite to
              create a brighter future together.
            </p>
          </div>
        </div>
      </section>

  {/* Theme & Highlights Section */}
  <section className="mt-16 mb-20 text-center">
    <h2 className="text-4xl font-bold text-gray-900">Our Fest Highlights</h2>
    <p className="text-lg text-gray-700 mt-2">Explore the essence of our celebration.</p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      
      {/* Card 1 */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
        <img 
          src="https://media.istockphoto.com/id/874747066/photo/music-festival-crowd.webp?a=1&b=1&s=612x612&w=0&k=20&c=YCvK5jf5317AEMxSon2Pew37vuO2XmltVZVjiXqojm4=" 
          alt="Cultural Events" 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-purple-700">🎭 Cultural Nights</h3>
        <p className="text-gray-600 mt-2">
          Witness dazzling dance performances, soulful music, and drama that brings our campus alive with colors.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1731374404945-d3fde8909690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" 
          alt="Tech Competitions" 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-pink-600">💡 Tech Competitions</h3>
        <p className="text-gray-600 mt-2">
          Coding challenges, hackathons, and robotics contests for the innovators and problem-solvers of tomorrow.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
        <img 
          src="https://media.istockphoto.com/id/1127510041/photo/rivalry-at-start-of-match.jpg?s=612x612&w=0&k=20&c=_ub8D3LtiYYCcz83WBOFnXsbzWJdD-KIWrwacj5sY_w=" 
          alt="Fun & Games" 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-yellow-600">🎮 Fun & Games</h3>
        <p className="text-gray-600 mt-2">
          LAN gaming, quizzes, treasure hunts, and more—because fests are about creating memories and fun with friends!
        </p>
      </div>

    </div>
  </section>

  <section className="py-20 px-6 md:px-20 ">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1668373195843-38855f7d4e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGZlc3R8ZW58MHx8MHx8fDA%3D"
            alt="Fest"
            className=" hover:scale-105 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1622382534061-c6f5e1596262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
            alt="Fest"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1601059478767-c466a9b691ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxmZXN0fGVufDB8fDB8fHww"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1638132704904-58d5ebe85aa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
            alt="Fest"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          
          
        </div>
      </section>


</div>

    );
}
