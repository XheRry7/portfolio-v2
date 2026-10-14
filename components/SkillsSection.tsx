const groups: { title: string; subtitle?: string; items: string[] }[] = [
  {
    title: "Core engineering",
    items: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Nest.js",
      "Fastify",
      "FastAPI",
      "Express.js",
      "Python",
      "GraphQL",
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Architecture & platforms",
    items: [
      "Microservices",
      "Multi-tenant systems",
      "RBAC",
      "Shared packages / monorepos",
      "REST APIs",
      "JWT auth",
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Vercel",
      "Nx",
    ],
  },
  {
    title: "AI engineering & integration",
    subtitle:
      "Production LLM products and AI-accelerated delivery, from RAG knowledge assistants and WhatsApp agents to day-to-day engineering leverage.",
    items: [
      "OpenAI / LLMs",
      "RAG (retrieval-augmented generation)",
      "Hybrid search & reranking",
      "pgvector embeddings",
      "n8n automation",
      "Intent routing & structured extraction",
      "AI-assisted development",
      "Conversational / WhatsApp agents",
      "Voice & multilingual flows",
      "Prompt & workflow design",
      "SSE streaming chat",
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      "HTML5",
      "CSS / SCSS",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    title: "Backend & CMS",
    items: [
      "PHP Laravel",
      "Prisma",
      "TypeORM",
      "SQLAlchemy",
      "Alembic",
      "Vite",
      "WordPress",
      "Contentful",
      "Shopify",
      "Sanity",
    ],
  },
  {
    title: "Tools & workflow",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Monday.com",
      "Slack",
      "Jenkins",
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
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full max-w-5xl">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Technical skills
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-gray-600">
          Senior full-stack toolkit with a strong focus on AI integration and
          production systems. See the{" "}
          <a
            href="#portfolio"
            className="font-semibold text-indigo-600 underline"
          >
            portfolio
          </a>{" "}
          for how this shows up in real projects.
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
