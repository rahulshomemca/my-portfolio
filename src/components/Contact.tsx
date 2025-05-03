import { useData } from "@/hooks/useData";
import type { ContactInfo } from "@/types/contact";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Contact() {
  const {
    data: contactInfo,
    isLoading,
    error,
  } = useData<ContactInfo[]>("/api/contact");

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading contact information</div>;
  if (!contactInfo) return null;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Let&apos;s connect and discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-700 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
