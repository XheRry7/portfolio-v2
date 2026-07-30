import Image from "next/image";

export function HomeAbout() {
  return (
    <>
      <section className="px-4">
        <div
          id="home"
          className="flex flex-col items-center justify-center gap-8 py-10 sm:min-h-screen sm:flex-row sm:justify-center sm:items-center md:py-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-xl text-center sm:w-auto sm:max-w-none sm:text-left">
            <p className="text-xl text-gray-700">Hello!</p>
            <p className="-my-1.5 text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl">
              I&apos;m{" "}
              <span className="border-b-8 border-indigo-400">Shehryar Ahmed</span>
            </p>
            <p className="mt-5 text-lg font-semibold text-gray-800 lg:text-xl">
              Senior Software Engineer
            </p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
              Full-stack systems, AI integration, and production platforms —
              shipping reliable software with modern tooling and LLM-powered
              workflows.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600 sm:text-base">
              <a href="tel:+971552803671" className="hover:text-indigo-700">
                +971552803671
              </a>
              <span className="text-gray-400" aria-hidden>
                •
              </span>
              <a
                href="mailto:shehryarahmed1744@gmail.com"
                className="break-all hover:text-indigo-700 sm:break-normal"
              >
                shehryarahmed1744@gmail.com
              </a>
              <span className="text-gray-400" aria-hidden>
                •
              </span>
              <span>Dubai, UAE</span>
            </div>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600 sm:text-base">
              <a
                href="https://www.linkedin.com/in/shehryar2001"
                className="text-indigo-600 hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
              <span className="text-gray-400" aria-hidden>
                •
              </span>
              <a
                href="https://github.com/XheRry7"
                className="text-indigo-600 hover:text-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <span className="text-gray-400" aria-hidden>
                •
              </span>
              <a
                href="#portfolio"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Portfolio
              </a>
            </p>
          </div>
          <div className="m-4 min-h-[20rem] w-80 shrink-0 overflow-hidden rounded-full lg:ml-6 lg:mt-0">
            <Image
              src="/images/profile.jpeg"
              alt="profile picture"
              width={320}
              height={320}
              className="h-full w-full max-w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-row items-center justify-center border-l-8 border-indigo-400 py-10 sm:border-indigo-400 sm:border-l-8 md:border-indigo-400 md:border-l-2 lg:h-screen lg:items-stretch lg:border-none lg:py-0"
      >
        <div
          className="animate-gradient hidden w-1/6 shrink-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-500 sm:hidden md:hidden lg:block lg:min-h-full"
          aria-hidden
        />
        <div
          className="flex w-full min-w-0 max-w-2xl flex-col justify-center px-4 py-8 sm:px-6 lg:ml-5 lg:w-1/2 lg:max-w-none lg:py-12 lg:pb-8 xl:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-4xl font-bold text-gray-800 md:text-5xl">
            Shehryar Ahmed
          </p>
          <p className="mt-2 mb-4 text-base font-semibold leading-5 text-gray-700">
            <span className="text-indigo-700">Senior Software Engineer</span> —
            Dubai, UAE
          </p>
          <h3 className="mb-2 text-lg font-bold text-gray-800">
            Professional summary
          </h3>
          <p className="mb-3 text-base leading-relaxed text-gray-700">
            <strong>Senior Software Engineer</strong> with{" "}
            <strong>5+ years</strong> designing and shipping full-stack products
            across real estate, ERP, and SaaS. I own features end-to-end —
            architecture, APIs, data models, and polished front ends — and
            actively <strong>leverage AI in day-to-day engineering</strong>{" "}
            (LLM integrations, workflow automation, and AI-assisted development)
            to move faster without sacrificing quality.
          </p>
          <p className="mb-3 text-base leading-relaxed text-gray-700">
            Strong across{" "}
            <strong>
              React, Next.js, Vue, Node, Nest, Fastify, TypeScript, GraphQL
            </strong>
            , and{" "}
            <strong>PostgreSQL / MySQL / MongoDB</strong>, with production
            experience in multi-tenant systems, RBAC, shared packages, AWS
            (EC2, S3), and portal integrations. Comfortable leading module
            delivery in complex domains like CRM, listings, and media
            workflows.
          </p>
          <p className="mb-2 text-base font-medium text-gray-800">
            Current location: <span className="text-indigo-700">Dubai</span>
          </p>
          <p className="mb-6 text-base text-gray-700">
            See the{" "}
            <a href="#skills" className="font-semibold text-indigo-600 underline">
              technical skills
            </a>{" "}
            section for the stack breakdown and the{" "}
            <a
              href="#portfolio"
              className="font-semibold text-indigo-600 underline"
            >
              projects
            </a>{" "}
            for case studies — including AI assistants and multi-tenant ERP.
          </p>

          <h3 className="mb-2 text-lg font-bold text-gray-800">
            Education & certifications
          </h3>
          <p className="mb-2 text-base text-gray-700">
            <strong>Air University</strong>, Islamabad, Pakistan — Bachelor of
            Science in Computer Science
          </p>
          <ul className="mb-8 list-inside list-disc text-base text-gray-700">
            <li>React JS — Complete Guide for Frontend Web Development</li>
            <li>Fundamentals of Database Engineering</li>
          </ul>

          <div className="flex items-center">
            <div className="w-[13rem] max-w-full">
              <a
                href="#portfolio"
                className="arrow-buttons decoration-none flex w-fit max-w-full items-center rounded border-2 border-solid border-indigo-500 bg-white px-3 py-2 pl-5 text-sm font-semibold tracking-wider text-indigo-600 transition duration-700 ease-out md:text-base"
              >
                Explore projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  className="shrink-0 text-indigo-600"
                >
                  <path
                    d="M0.752051 13.8047L2.51689 15.5696L10.0269 8.05962L2.51689 0.549654L0.75205 2.31449L6.48466 8.05962L0.752051 13.8047Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
