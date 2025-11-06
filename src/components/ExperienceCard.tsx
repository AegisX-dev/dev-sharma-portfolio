interface ExperienceCardProps {
  role: string;
  dates: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  role,
  dates,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
        <h3 className="text-xl font-semibold text-gray-100">{role}</h3>
        <span className="text-sm text-gray-400 mt-1 md:mt-0">{dates}</span>
      </div>
      <ul className="mt-4 list-disc list-outside pl-5 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
