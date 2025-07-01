// src/components/CloudSupportGrid.jsx

import React from "react";
import cloudIcons from "../contexts/cloudIcons";

export default function CloudSupportGrid({ data }) {
  const items = Array.isArray(data) ? data : cloudIcons;

  return (
    <section className="py-12 px-4 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-6">RcloneView Supports Clouds</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3 justify-items-center leading-none">
            {items.map((cloud, idx) => (
                <div
                key={idx}
                className="flex items-center justify-center h-[48px] overflow-hidden"
                >
                <img
                    src={cloud.icon}
                    alt={cloud.name}
                    title={cloud.name}
                    loading="lazy"
                    className="h-full object-contain"
                    style={{ margin: 0 }}
                />
                </div>
            ))}
        </div>

      <div className="mt-8">
        <a
          href="https://rcloneview.com/src/download.html"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Manage Your Clouds Now →
        </a>
      </div>
    </section>
  );
}
