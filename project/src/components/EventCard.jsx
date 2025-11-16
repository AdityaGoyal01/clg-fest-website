import React from "react";

export default function EventCard({ title, time, image }) {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{time}</p>
        </div>
    );
}
