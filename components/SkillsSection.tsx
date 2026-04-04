const groups: { title: string; subtitle?: string; items: string[] }[] = [
  {
    title: "Development",
    items: [
      "HTML5",
      "CSS (incl. SCSS)",
      "JavaScript",
      "React.js",
      "Next.js",
      "Nest.js",
      "Node.js",
      "n8n",
      "MongoDB",
      "Express.js",
      "PHP",
    ],
  },
  {
    title: "Moderate development skills",
    items: [
      "TypeScript",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Vercel",
      "Redux",
      "SQL",
      "React Native",
      "Python"
    ],
  },
  {
    title: "Frameworks & UI",
    items: [
      "AngularJS",
      "PHP Laravel",
      "Vue.js",
      "Material UI",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
    ],
  },
  {
    title: "CMS",
    items: ["WordPress", "Contentful", "Shopify", "Sanity"],
  },
  {
    title: "AI & automation (DivaOS / chatbot)",
    subtitle:
      "WhatsApp assistant work — complements the stack above for conversational products.",
    items: [
      "OpenAI / LLMs",
      "n8n",
      "Intent routing & structured extraction",
      "Redis (sessions & concurrency)",
      "WhatsApp Business APIs",
      "Voice & multilingual flows",
    ],
  },
  {
    title: "Tools & workflow",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Bitbucket",
      "Jira",
      "Monday.com",
      "Slack",
    ],
  },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex max-w-full items-center break-words rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
      {label}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-4 py-16 lg:min-h-0 lg:py-20"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="w-full max-w-5xl">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Technical skills
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-gray-600">
          Have a look at my{" "}
          <a
            href="#portfolio"
            className="font-semibold text-indigo-600 underline"
          >
            portfolio
          </a>{" "}
          for how this shows up in real projects — from full-stack web to AI
          assistants.
        </p>
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-1 text-lg font-bold text-gray-900 md:text-xl">
                {g.title}
              </h3>
              {g.subtitle ? (
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  {g.subtitle}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Languages: English, Urdu, Hindi
        </p>
      </div>
    </section>
  );
}
