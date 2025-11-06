import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  caseStudyUrl?: string;
}

const ProjectCard = ({ title, description, tags, demoUrl, githubUrl, caseStudyUrl }: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
      <p className="mt-3 text-gray-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center space-x-6 flex-wrap gap-y-3">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <FiExternalLink size={20} />
          <span>Live Demo</span>
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <FaGithub size={20} />
          <span>View Code</span>
        </Link>
        {caseStudyUrl && (
          <Link
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <HiOutlineDocumentText size={20} />
            <span>Case Study</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
