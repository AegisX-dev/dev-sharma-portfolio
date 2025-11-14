import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import CertificationCard from "@/components/CertificationCard";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import Image from "next/image";

const projects = [
  {
    title: "VibeScribe",
    description: "Upgraded the AI core to Gemini 2.5 Flash and added deep personalization with Supabase, allowing the AI to learn and adopt a user's unique brand voice from their writing style. Now a full-stack app with profile management and database integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini 2.5", "Supabase", "PostgreSQL"],
    demoUrl: "https://vibe-scribe.vercel.app/",
    githubUrl: "https://github.com/AegisX-dev/VibeScribe",
    caseStudyUrl: "https://ai-orchestrator.hashnode.dev/from-ai-tool-to-ai-partner-re-architecting-vibescribe-for-deep-personalization",
  },
  {
    title: "PromptCraft",
    description: "Architected and deployed a 'Dual-AI Router' (Gemini + OpenRouter) to intelligently manage API requests and run the app on a $0 budget. Engineered a per-user, database-driven quota system with MongoDB and next-auth.",
    tags: ["Next.js", "MongoDB", "TypeScript", "Next-Auth", "Gemini", "OpenRouter"],
    demoUrl: "https://prompt-craft-beryl.vercel.app/",
    githubUrl: "https://github.com/AegisX-dev/PromptCraft",
    caseStudyUrl: "https://ai-orchestrator.hashnode.dev/how-i-built-a-smart-ai-prompt-refiner-on-a-0-budget-nextjs-gemini-and-a-dual-ai-router",
  },
  {
    title: "Nexus",
    description: "Built a local-first, open-source database dashboard that unifies MongoDB Atlas and Supabase management in one secure, locally-running application. Engineered a dual-architecture system with a Next.js frontend and Express.js proxy server that keeps all credentials local-only.",
    tags: ["Next.js", "Node.js", "Express.js", "TypeScript", "Tailwind CSS v4", "MongoDB", "Supabase", "PostgreSQL"],
    demoUrl: "https://github.com/AegisX-dev/nexus",
    githubUrl: "https://github.com/AegisX-dev/nexus",
    caseStudyUrl: "https://ai-orchestrator.hashnode.dev/why-i-built-a-local-first-database-dashboard-and-why-you-should-too",
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
  "Frontend Development": [
    "React.js",
    "Next.js 14/15",
    "TypeScript",
    "Tailwind CSS v4",
    "Responsive Design"
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "MERN Stack",
    "Authentication"
  ],
  "Databases": [
    "MongoDB Atlas",
    "Supabase",
    "PostgreSQL",
    "Schema Design"
  ],
  "AI & Machine Learning": [
    "Prompt Engineering",
    "LLM Integration",
    "Gemini API",
    "LangChain",
    "AI Architecture"
  ],
  "DevOps & Tools": [
    "Git & GitHub",
    "Vercel",
    "CI/CD",
    "Debugging"
  ],
  "Soft Skills": [
    "Agile/Scrum",
    "System Design",
    "Problem Solving",
    "Technical Writing"
  ]
};

const certifications = [
  {
    title: "Prompt Engineering Skills for Developers",
    issuer: "LinkedIn Learning",
    date: "Nov 2025",
    duration: "9 hours 54 minutes",
    description: "Learning Path completed - 7 certificates",
    tags: ["NLP", "AI", "Generative AI", "Prompt Engineering", "LangChain", "ChatGPT"],
    imageUrls: [
      "/images/certificates/CertificateOfCompletion_Prompt Engineering Skills for Developers_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_Prompt Engineering with LangChain_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_Building Advanced AI Apps with Prompt Flow_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_Prompt Engineering with ChatGPT_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_ChatGPT Perfecting Your Output with Templates in Prompts_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_Introduction to Prompt Engineering for Generative AI_page-0001.jpg",
      "/images/certificates/CertificateOfCompletion_AI and Developer Productivity_page-0001.jpg",
    ],
  },
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
        <AnimatedSection direction="left" className="max-w-4xl w-full mb-16">
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
        </AnimatedSection>

        <AnimatedSection direction="right" className="container mx-auto max-w-4xl mt-16 scroll-mt-20" id="about">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
            About Me
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 text-center">
            I am an AI Application Developer and Full-Stack &apos;AI Orchestrator&apos; with hands-on experience in the MERN stack and Next.js. My core expertise is in architecting and building AI-powered apps from the ground up. I am seeking a full-time role where I can apply my skills in system architecture, AI integration, and prompt engineering to build the next generation of smart applications.
          </p>
        </AnimatedSection>

        <section id="projects" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
              Key Projects
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <AnimatedCard key={project.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.1}>
                <ProjectCard {...project} />
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section id="experience" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <AnimatedSection direction="right">
            <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
              Work Experience
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-8">
            {workExperience.map((exp) => (
              <AnimatedCard key={exp.role} direction="left" delay={0.1}>
                <ExperienceCard {...exp} />
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section id="education" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
              Education
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </AnimatedSection>
          <AnimatedCard direction="right" delay={0.1}>
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
          </AnimatedCard>
        </section>

        <section id="certifications" className="container mx-auto max-w-4xl mt-16 scroll-mt-20">
          <AnimatedSection direction="right">
            <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
              Certifications
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-6">
            {certifications.map((cert, index) => (
              <AnimatedCard key={cert.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.05}>
                <CertificationCard {...cert} />
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section id="skills" className="container mx-auto max-w-6xl mt-16 mb-16 scroll-mt-20">
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
              Core Technologies & Skills
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <AnimatedCard key={category} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.05}>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded-full hover:bg-gray-600 transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Thank You Note */}
          <AnimatedSection direction="right" delay={0.2} className="text-center mt-16 pb-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Thank You for Visiting!</h3>
            <p className="text-lg text-gray-300 mb-6">
              I appreciate you taking the time to learn about my work and expertise.
            </p>
            <p className="text-gray-400">
              Feel free to reach out if you&apos;d like to collaborate or discuss opportunities.
            </p>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
}
