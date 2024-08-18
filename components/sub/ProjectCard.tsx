import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  codeUrl: string; // Add a new prop for the code URL
}

const ProjectCard = ({ src, title, description, codeUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-[9999]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="cursor-pointer w-full object-contain"
      />

      <div className="relative p-4 z-[9999]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Add the button for viewing the code */}
        <Link
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          See Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
