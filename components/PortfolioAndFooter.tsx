/* Static export: plain <img> for GIF previews. */
/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from "react";
import { AwardsSection } from "@/components/AwardsSection";

function DescRow({ children }: { children: ReactNode }) {
  return (
    <p className="flex flex-wrap gap-2 font-medium sm:flex-nowrap sm:gap-0">
      <span className="mr-2 hidden shrink-0 sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          className="mt-1"
          viewBox="0 0 512 512"
        >
          <path
            fill="var(--ci-primary-color, #000000)"
            d="M334.627,16H48V496H472V153.373ZM440,166.627V168H320V48h1.373ZM80,464V48H288V200H440V464Z"
            className="ci-primary"
          />
          <rect
            width="224"
            height="32"
            x="136"
            y="296"
            fill="var(--ci-primary-color, #000000)"
            className="ci-primary"
          />
          <rect
            width="224"
            height="32"
            x="136"
            y="376"
            fill="var(--ci-primary-color, #000000)"
            className="ci-primary"
          />
        </svg>
        <span className="ml-2 hidden sm:flex">Description:</span>
      </span>
      <span className="min-w-0 flex-1 font-normal leading-relaxed">
        {children}
      </span>
    </p>
  );
}

function TechRow({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="mr-2 mb-2 flex items-center justify-center font-bold sm:hidden">
        <svg
          className="h-7 w-7 text-indigo-600"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
        Tech Stack:
      </span>
      <p className="flex items-center font-medium">
        <span className="mr-2 hidden items-center sm:flex">
          <svg
            className="h-7 w-7 text-indigo-600"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
          Tech Stack:
        </span>
        <span className="font-normal">{children}</span>
      </p>
    </>
  );
}

function ProjectCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-indigo-100 bg-indigo-50/40 p-4 sm:p-5">
      {children}
    </div>
  );
}

function ProjectTitle({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  const inner =
    href != null ? (
      <a
        href={href}
        style={{ color: "blue" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <span className="text-gray-900">{children}</span>
    );
  return (
    <>
      <p className="mb-2 hidden text-xl font-semibold sm:flex">{inner}</p>
      <p className="mb-2 flex justify-center text-xl font-semibold sm:hidden">
        {inner}
      </p>
    </>
  );
}

export function PortfolioAndFooter() {
  return (
    <>
      <section
        id="portfolio"
        className="mx-auto max-w-6xl px-4 py-10 text-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="pb-2 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Projects
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-gray-600">
          Senior full-stack work across multi-tenant ERP, RAG / AI applications,
          real estate platforms, classifieds, and US-based products, with a
          focus on systems that scale and integrate cleanly.
        </p>

        <div className="mb-10 space-y-8 text-base leading-relaxed">
          <ProjectCard>
            <ProjectTitle>Ilmora: RAG knowledge assistant</ProjectTitle>
            <DescRow>
              Internal company knowledge assistant that turns company documents
              into a searchable, chat-based Q&amp;A system. Admins upload
              policies and guides (PDF, Word, Excel); the app parses and chunks
              them with structure-aware ingestion, embeds sections into{" "}
              <strong>PostgreSQL with pgvector</strong>, and retrieves the most
              relevant passages via <strong>hybrid vector + keyword search</strong>{" "}
              with RRF, glossary expansion, and local cross-encoder reranking. An
              LLM then <strong>streams a cited answer</strong> so replies stay
              tied to the source material, not generic web knowledge. Includes
              JWT auth and admin tooling, ChatGPT-style React UI with
              conversation history, voice input, citations and source
              highlighting, feedback/analytics, and Docker-based production
              deployment.
            </DescRow>
            <TechRow>
              Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, pgvector, OpenAI
              API, RAG, hybrid search, React, TypeScript, Vite, Docker, JWT auth,
              SSE streaming
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>
              Multi-tenant ERP: CRM, listings & media workflows
            </ProjectTitle>
            <DescRow>
              Full-stack development on a <strong>microservices-based, multi-tenant
              ERP</strong> platform with shared packages and role-based access
              control (RBAC). Owned work inside the CRM surface: the{" "}
              <strong>listings module</strong>, plus{" "}
              <strong>photo request</strong> and <strong>media request</strong>{" "}
              flows for operational media handling. Integrated top UAE property
              portals (<strong>Bayut</strong>, <strong>Dubizzle</strong>, and{" "}
              <strong>Property Finder</strong>) for listing syndication and
              distribution. Built for a proper ERP footprint: tenancy isolation,
              reusable packages across services, and production media storage on
              S3.
            </DescRow>
            <TechRow>
              React, Node.js, TypeScript, PostgreSQL, Fastify, AWS S3, AWS EC2,
              RBAC, shared packages
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>DivaOS: AI WhatsApp virtual assistant</ProjectTitle>
            <DescRow>
              Architected and built DivaOS on <strong>n8n</strong>, orchestrating{" "}
              <strong>OpenAI</strong>, <strong>Redis</strong>, and internal REST
              APIs to automate broker workflows end-to-end: LLM-driven intent
              routing and structured filter extraction for listings search, CRM
              actions, scheduling, and document delivery; multilingual experience
              (English/Arabic) with language detection and rich WhatsApp UI; voice
              message pipeline (retrieval, transcription, quality checks);
              Redis-backed sessions with per-user locks for concurrent messages;
              listings enrichment (floor plans, payment plans, brochures); CRM
              (leads, clients, opportunities); calendar workflows; and market
              analysis intents with clear fallbacks. A concrete example of{" "}
              <strong>AI integration in production</strong>, not just prototyping.
            </DescRow>
            <TechRow>
              n8n, OpenAI / LLMs, Redis, REST APIs, WhatsApp, Node ecosystem
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>
              Driven Properties: corporate website & listings
            </ProjectTitle>
            <DescRow>
              Contributed to the Driven Properties website with a focus on the
              property listings module: improved listing structure for dynamic
              emirates across the UAE, scalability, and filters aligned with
              business needs. Collaborated with Property Monitor on instant
              property valuation for Dubai users, and with Mortgage Finder to
              integrate a mortgage calculator. Worked with the SEO team on
              optimization strategies and used Google Analytics and Google Tag
              Manager for event tracking and lead capture.
            </DescRow>
            <TechRow>
              Next.js, TypeScript, Sanity, Vercel, PHP CodeIgniter, MySQL, Git,
              GitHub
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>Smartlist: classified ads platform</ProjectTitle>
            <DescRow>
              High-performance, scalable classified ads: highly normalized
              database design for B2B and B2C, hierarchical categories,
              subcategories, and dynamic filtered categories. Built a robust
              filtering engine for multi-parameter queries and reusable
              form-generation logic for category-specific fields. Emphasized
              backend performance with query optimization, PostgreSQL indexing, and
              low-latency responses for future scale.
            </DescRow>
            <TechRow>
              Next.js, NestJS, TypeScript, TypeORM, PostgreSQL, Express, Redis,
              GitHub
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>RCMS: company-wide ERP</ProjectTitle>
            <DescRow>
              Full stack developer on a company-wide ERP: Accounting (invoices,
              bills, receipts, payments, journal entries), HR (onboarding,
              attendance, leave, payroll), and Client Contract Management
              (create, approve, renew contracts with automated document
              generation). Close collaboration across teams, integrated modules
              for data flow, and secure role-based access. Built with Laravel,
              MySQL, REST APIs, and Vue.js/React-oriented front ends, focused on
              performance, scalability, and UX.
            </DescRow>
            <TechRow>
              JavaScript, jQuery, PHP Laravel, MySQL, Redis, GitHub
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>ERP implementation: HR workflows</ProjectTitle>
            <DescRow>
              Spearheaded HR workflows: Employee Master, Purchase Order, Purchase
              Request, Camps Management, and Leaves Management. Vue.js for
              dynamic front-end interactions, PHP Laravel for backend logic, MySQL
              for storage, and jQuery for client-side interactivity: intuitive
              interfaces, complex workflow orchestration, and optimized database
              operations.
            </DescRow>
            <TechRow>
              Vue.js, jQuery, Bootstrap, PHP Laravel, MySQL, stored procedures,
              GitHub
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle href="https://complyauto.com">ComplyAuto</ProjectTitle>
            <DescRow>
              A US-based product that provides privacy and cybersecurity for
              dealers. Designed and implemented scalable, maintainable full-stack
              solutions; focused on developing and maintaining GraphQL APIs for
              smooth front-end and back-end communication.
            </DescRow>
            <TechRow>
              React, Node, TypeScript, PostgreSQL, GraphQL, Prisma Client, Nexus
              Schema, Nx, GitHub
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle href="https://flex.gazelle.com">Gazelle Flex</ProjectTitle>
            <DescRow>
              A US-based company that buys and sells mobile phones and offers
              devices on rent. Implemented responsive, user-friendly interfaces
              with strong UX practices.
            </DescRow>
            <TechRow>
              Next.js, Tailwind CSS, Contentful, Shopify, Git, GitHub, Jenkins
            </TechRow>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle href="https://app.homelendingpal.com">
              Home Lending Pal
            </ProjectTitle>
            <DescRow>
              A US-based product for a transparent, equitable home-buying
              process. Developed and maintained RESTful APIs between front-end and
              back-end; diagnosed and resolved bugs to improve functionality and
              performance.
            </DescRow>
            <TechRow>React, Node, Express, MongoDB</TechRow>
          </ProjectCard>
        </div>

      </section>

      <AwardsSection />

      <footer className="bg-gray-900" id="contact">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://github.com/XheRry7"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/shehryar.ahmed.161214"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shehryar2001"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
          <div className="mt-2 flex flex-col items-center gap-2 md:order-1 md:mt-0 lg:flex-row lg:flex-wrap lg:items-center">
            <p className="text-center text-base font-light text-gray-300 lg:text-left">
              <span className="text-gray-400">Email:</span>{" "}
              <strong className="font-semibold">
                shehryarahmed1744@gmail.com
              </strong>
            </p>
            <span className="hidden px-4 text-gray-300 lg:inline">|</span>
            <p className="text-center text-base font-light text-gray-300 lg:text-left">
              <span className="text-gray-400">Phone:</span>{" "}
              <strong className="font-semibold">+971552803671</strong>
            </p>
            <span className="hidden px-4 text-gray-300 lg:inline">|</span>
            <p className="text-center text-base text-gray-300 lg:text-left">
              Dubai, UAE
            </p>
            <span className="hidden px-4 text-gray-300 lg:inline">|</span>
            <a
              href="https://docs.google.com/document/d/1Feiao8z1aoM0mLL8e9Yl85lsRoiUJdEiF4pX7eXMbcE/edit?usp=sharing"
              className="text-center text-base font-light text-gray-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
