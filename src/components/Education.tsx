export default function Education() {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "RV College of Engineering",
      details: "CGPA - 8.4",
      period: "Sept 2017 - July 2020",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Burdwan Raj College",
      details: "Percentage - 72%",
      period: "Sept 2014 - July 2017",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            My academic journey and qualifications
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-300 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
