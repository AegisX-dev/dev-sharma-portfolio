import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import CertificationCard from "@/components/CertificationCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  {
    title: "PromptCraft",
    description: "Architected and deployed a 'Dual-AI Router' (Gemini + OpenRouter) to intelligently manage API requests and run the app on a $0 budget. Engineered a per-user, database-driven quota system with MongoDB and next-auth.",
    tags: ["Next.js", "MongoDB", "TypeScript", "Next-Auth", "Gemini", "OpenRouter"],
    demoUrl: "https://prompt-craft-beryl.vercel.app/",
    githubUrl: "https://github.com/AegisX-dev/PromptCraft",
  },
  {
    title: "VibeScribe",
    description: "Developed and demoed an AI content partner for a buildathon, transforming unstructured notes into context-aware social media content. Built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenRouter", "LLM"],
    demoUrl: "https://vibe-scribe.vercel.app/",
    githubUrl: "https://github.com/AegisX-dev/VibeScribe",
  },
];

const workExperience = [
  {
    role: "Fullstack Web Development Intern",
    dates: "Mar 2025 – Sep 2025",
    responsibilities: [
      "Built and updated features for a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application.",
      "Designed and built RESTful API endpoints to handle core data for the application.",
      "Helped build a secure user login system from the ground up, using JSON Web Tokens (JWT) for session management.",
      "Used Next.js and Tailwind CSS to create responsive, server-rendered pages, which helped make the site faster.",
      "Worked as part of an Agile team, joining in sprint planning and code reviews to help meet project deadlines.",
    ],
  },
];

const educationData = [
  {
    degree: "B.Sc (Maths)",
    institution: "Shri Madhav College of Education and Technology (CCSU)",
    years: "2023 – 2026",
  },
  {
    degree: "Class 12th (PCM)",
    institution: "Dewan Public School (CBSE Board)",
    years: "2023",
  },
  {
    degree: "Class 10th",
    institution: "Dewan Public School (CBSE Board)",
    years: "2021",
  },
];

const skillsData = {
  "Frontend": ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Responsive Web Design"],
  "Backend": ["Node.js", "Express.js", "REST API development", "MERN Stack"],
  "Databases": ["MongoDB", "Supabase", "Database Schema Design"],
  "AI/ML": ["AI Application Architecture", "Prompt Engineering", "API Integration", "LLM Fine-Tuning", "Generative AI"],
  "Tools": ["Git", "GitHub", "Agile Workflow", "Technical Debugging"],
};

const certifications = [
  {
    title: "Fine-Tuning for LLMs: from Beginner to Advanced",
    issuer: "LinkedIn Learning",
    date: "Oct 2025",
    duration: "3 hours 25 minutes",
    tags: ["LLM", "AI", "Fine-Tuning", "Generative AI"],
    imageUrl: "/images/certificates/linkedin-llm.jpg",
  },
  {
    title: "Front End Web Development",
    issuer: "MindLuster",
    date: "Feb 2025",
    duration: "9 hours",
    certificateNo: "e05fe04f",
    tags: ["HTML", "CSS", "JavaScript", "Reactjs", "Web Development"],
    imageUrl: "/images/certificates/mindluster.jpg",
  },
  {
    title: "Certificate of Internship",
    issuer: "Unified Mentor",
    date: "Mar 2025 - Sep 2025",
    duration: "6 months",
    description: "Fullstack Web Development Intern",
    tags: ["MERN Stack", "Full-Stack", "Node.js", "React.js", "MongoDB"],
    imageUrl: "/images/certificates/unified-mentor.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-6 md:px-12 pt-24 md:pt-32">
        {/* Hero Section */}
        <div className="max-w-4xl w-full mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Dev Sharma"
                width={200}
                height={200}
                className="rounded-full border-4 border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold">Dev Sharma</h1>
              <h2 className="text-2xl text-gray-300 mt-2">
                AI Application Developer & Full-Stack &apos;AI Orchestrator&apos;
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Core expertise in architecting and building AI-powered apps from the
                ground up.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            About Me
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 text-center">
            I am an AI Application Developer and Full-Stack &apos;AI Orchestrator&apos; with hands-on experience in the MERN stack and Next.js. My core expertise is in architecting and building AI-powered apps from the ground up. I am seeking a full-time role where I can apply my skills in system architecture, AI integration, and prompt engineering to build the next generation of smart applications.
          </p>
        </section>

        <section id="projects" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            Key Projects
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="experience" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            Work Experience
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <div className="flex flex-col gap-8">
            {workExperience.map((exp) => (
              <ExperienceCard key={exp.role} {...exp} />
            ))}
          </div>
        </section>

        <section id="education" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            Education
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col gap-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300">
            {educationData.map((edu, index) => (
              <div key={edu.degree}>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <h3 className="text-lg font-semibold text-gray-100">{edu.degree}</h3>
                  <span className="text-sm text-gray-400 mt-1 md:mt-0">{edu.years}</span>
                </div>
                <p className="text-gray-300 mt-1">{edu.institution}</p>
                {index < educationData.length - 1 && <hr className="border-gray-700 mt-6" />}
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            Certifications
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <div className="flex flex-col gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </section>

        <section id="skills" className="container mx-auto max-w-6xl mt-16 mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            Core Technologies & Skills
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full hover:bg-gray-600 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Thank You Note */}
          <div className="text-center mt-16 pb-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Thank You for Visiting!</h3>
            <p className="text-lg text-gray-300 mb-6">
              I appreciate you taking the time to learn about my work and expertise.
            </p>
            <p className="text-gray-400">
              Feel free to reach out if you&apos;d like to collaborate or discuss opportunities.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
