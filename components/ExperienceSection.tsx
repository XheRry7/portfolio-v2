const experiences = [
  {
    company: "Driven Properties",
    location: "Dubai, UAE",
    context:
      "A leading RERA-certified real estate agency in Dubai, offering comprehensive property brokerage, management and development services backed by thousands of listings and strong developer partnerships.",
    role: "Software Engineer",
    period: "May 2025 – present",
    highlights: [
      "Boosted performance of the property instant valuation system by 80%, reducing PDF generation time and improving user experience.",
      "Collaborated with external partners (Mortgage Finder, Liana, Property Monitor) to integrate tools including mortgage calculators, email marketing systems, and instant valuation flows.",
      "Partnered with internal teams (marketing, sales, listings, CRM) to gather requirements and deliver solutions aligned with business objectives.",
      "Designed and implemented lead tracking mechanisms to ensure consistent and accurate event capture in Google Analytics and Google Tag Manager.",
      "Refactored legacy codebase and applied Next.js best practices to improve code quality, scalability, and overall system performance.",
      "Enhanced website SEO performance by collaborating with the SEO team and applying modern optimization strategies.",
      "Standardized and redesigned URL structures for property listings, making them more consistent, scalable, and SEO-friendly.",
    ],
  },
  {
    company: "Royal Class",
    location: "Dubai, UAE",
    context:
      "A premium business center, consultancy and real estate agency in Dubai.",
    role: "Software Developer (Contractor)",
    period: "August 2024 – May 2025",
    highlights: [
      "Developed and implemented a comprehensive accounting module for financial management, including automated generation of income and expense statements, customer balance sheets, and vendor balance sheets.",
      "Built and integrated financial modules such as invoices, bills, credit notes, debit notes, and payment processing to enhance system functionality and user experience.",
      "Engineered backend solutions for client applications, delivering seamless integration with front-end systems and ensuring robust, user-friendly functionality.",
      "Contributed to the development of a high-performance, scalable classifieds platform, catering to both B2B and B2C use cases.",
      "Designed and implemented filtering mechanisms for product listings to support complex query combinations (categories, subcategories, attributes).",
      "Built dynamic form generation for category-specific listing fields with validation and localization support.",
      "Collaborated with the team on efficient query planning, load testing, and caching strategies.",
      "Enhanced ERP systems by optimizing the accounting module to streamline financial workflows, improve data accuracy, and increase system reliability.",
      "Resolved performance issues through database query optimizations, caching strategies, and asynchronous processing to improve application responsiveness.",
    ],
  },
  {
    company: "Emirates National Facilities Management",
    location: "Dubai, UAE",
    context:
      "A service-based company that provides integrated facilities management services.",
    role: "Applications Developer (Contractor)",
    period: "Feb 2024 – July 2024",
    highlights: [
      "Worked on their ERP system in the HR module.",
      "Integrated stored procedures and services to enhance application features and functionality.",
      "Created backend APIs using PHP Laravel and MVC architecture.",
      "Developed a comprehensive employee self-service portal, enabling seamless access to HR-related information and services, leading to a 30% reduction in HR administrative tasks.",
      "Identified and addressed performance bottlenecks within the HR module, including database query optimizations, caching strategies, and asynchronous processing techniques.",
    ],
  },
  {
    company: "Cloudtek",
    location: "Islamabad, Pakistan",
    context:
      "A project-based company that specializes in delivering top-of-the-line solutions for high-end projects.",
    role: "Software Engineer",
    period: "1 Sep 2020 – 5 Jan 2024",
    highlights: [
      "Collaborated with a diverse range of clients based in the United States, engaging in various projects across different tech stacks.",
      "Collaborated with UX/UI designers to implement visually appealing and intuitive user interfaces.",
      "Integrated third-party APIs and services (e.g., payment gateways) to enhance application features and functionality.",
      "Diagnosed and resolved bugs, improving the overall functionality and performance of web applications.",
      "Contributed to the optimization of database queries and overall system performance.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-gray-200 bg-gray-50 px-4 py-16 lg:py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Professional experience
        </h2>
        <p className="mb-12 text-center text-base text-gray-600">
          Real estate platforms, ERP, classifieds, and US client delivery.
        </p>
        <div className="space-y-12">
          {experiences.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6 md:p-8"
            >
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-start md:justify-between md:gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-gray-900">
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {job.context}
                  </p>
                </div>
                <div className="shrink-0 text-left md:text-right">
                  <p className="font-semibold text-indigo-700">{job.role}</p>
                  <p className="text-sm text-gray-600">{job.period}</p>
                </div>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-gray-700">
                {job.highlights.map((item, i) => (
                  <li key={`${job.company}-${i}`} className="pl-0.5 sm:pl-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
