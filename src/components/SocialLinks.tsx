"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      <Link
        href="https://github.com/AegisX-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-125"
      >
        <FaGithub size={28} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/dev-sharma-aegis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-125"
      >
        <FaLinkedin size={28} />
      </Link>
      <Link
        href="https://www.instagram.com/ryou.dev_/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-125"
      >
        <FaInstagram size={28} />
      </Link>
      <Link
        href="https://hashnode.com/@Aegis-Dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-125"
      >
        <SiHashnode size={28} />
      </Link>
      <Link
        href="/Dev_Sharma_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-125"
      >
        <HiOutlineDocumentText size={28} />
      </Link>
    </div>
  );
}
