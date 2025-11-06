"use client";

import { useState } from "react";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  skills?: string[];
  tags?: string[];
  certificateNo?: string;
  description?: string;
  imageUrl?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  duration,
  skills,
  tags,
  certificateNo,
  description,
  imageUrl,
}: CertificationCardProps) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div
        className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 relative cursor-pointer"
        onClick={() => imageUrl && setShowImage(!showImage)}
      >
        <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
            <p className="text-gray-300 mt-1">{issuer}</p>
            {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
          </div>
          <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
            <div>{date}</div>
            <div className="text-xs text-gray-500">{duration}</div>
            {certificateNo && (
              <div className="text-xs text-gray-500 mt-1">Cert. No: {certificateNo}</div>
            )}
          </div>
        </div>
        {skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full hover:bg-gray-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-900/50 border border-blue-700 text-blue-200 text-xs font-medium rounded-full hover:bg-blue-800/50 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {imageUrl && (
          <div className="mt-3 text-xs text-gray-500 italic">
            Click to view certificate
          </div>
        )}
      </div>

      {/* Certificate Preview Modal */}
      {showImage && imageUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowImage(false)}
        >
          <div className="relative max-w-5xl w-full mx-4 animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowImage(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-light transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <div className="bg-gray-900 rounded-lg p-4 border-2 border-gray-600 shadow-2xl">
              <Image
                src={imageUrl}
                alt={`${title} Certificate`}
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
