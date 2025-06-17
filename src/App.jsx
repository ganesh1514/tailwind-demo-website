import heroImg from "./assets/icon1.jpeg";
function App() {
  return (
    <>
      <div class="container max-w-6xl md:mx-auto p-5 md:p-0">
        <header>
          <section class="md:min-h-dvh [@media(max-height:600px)]:min-h-[700px] grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-8 md:p-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-12 h-12 mb-4 text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                />
              </svg>
              <h1 class="text-4xl md:text-6xl font-bold text-slate-800 tracking-tight mb-4">
                Become a fullstack developer with the world&apos;s best online
                bootcamp
              </h1>
              <p class="mb-8">
                Join the world&apos;s best and most affordable fullstack
                development bootcamp and master the skills to build real-world
                applications with expert guidance, hands-on projects, and the
                latest industry tools.
              </p>
              <ul class="flex mb-4 gap-6">
                <li>
                  <a
                    class="bg-sky-500 hover:bg-sky-700 text-white px-8 py-4 rounded-md inline-block"
                    href="#"
                  >
                    Get started
                  </a>
                </li>
                <li>
                  <a
                    class="bg-slate-400 hover:bg-slate-500 text-white px-8 py-4 rounded-md inline-block"
                    href="#"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </div>

            <img
              src={heroImg}
              alt="Placeholder Image"
              class="rounded-lg shadow-lg md:w-3/4"
            />
          </section>
        </header>
        <main>
          <section class="mx-auto mb-20 bg-white py-24 md:py-30">
            <div class="mx-auto max-w-2xl md:text-center">
              <h2 class="text-4xl font-bold text-slate-800 mb-4 tracking-tight text-pretty md:text-5xl lg:text-balance">
                How it works
              </h2>
              <p class="mb-10 text-gray-600 text-balance">
                Our bootcamp follows a step-by-step, guided approach, breaking
                down complex concepts into manageable sections, ensuring steady
                progress and confidence as you build your full-stack
                application.
              </p>
            </div>
            <div class="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 md:gap-y-5 justify-items-center items-center mx-auto max-w-4xl text-pretty">
              <div class="flex gap-4 justify-items-center items-start md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="flex-shrink-0 size-10 bg-sky-500 text-white rounded-md p-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
                <div class="text-pretty">
                  <h2 class="text-lg font-bold text-slate-800">High quality</h2>
                  <p class="mt-2">
                    The bootcamp delivers high-quality, visually engaging
                    videos, with animations and clear explanations, perfect for
                    visual learners.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 justify-items-center items-start md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="flex-shrink-0 size-10 bg-sky-500 text-white rounded-md p-2 align-self-start"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <div class="text-pretty">
                  <h2 class="text-lg font-bold text-slate-800">Detailed</h2>
                  <p class="mt-2">
                    Every concept is taught in comprehensive detail, ensuring
                    students understand thoroughly, with no confusion left
                    behind.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 justify-items-center items-start md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="flex-shrink-0 size-10 bg-sky-500 text-white rounded-md p-2 align-self-start"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <div class="text-pretty">
                  <h2 class="text-lg font-bold text-slate-800">Structured</h2>
                  <p class="mt-2">
                    The course is structured to guide you through building a
                    full-stack application, providing a clear, start-to-finish
                    understanding.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 justify-items-center items-start md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="flex-shrink-0 size-10 bg-sky-500 text-white rounded-md p-2 align-self-start"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>

                <div class="text-pretty">
                  <h2 class="text-lg font-bold text-slate-800">Certified</h2>
                  <p class="mt-2">
                    Earn a recognized certification that validates your
                    full-stack skills, giving you the edge and confidence to
                    secure your dream job.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <section class="bg-slate-800 text-white p-8 text-pretty">
          <div class="container mx-auto text-center mb-4">
            <h2 class="text-3xl font-bold mb-4">
              Ready to start your journey?
            </h2>
            <p class="mb-6">
              Join thousands of successful developers who have transformed their
              careers with our bootcamp.
            </p>
            <a
              href="#"
              class="bg-sky-500 hover:bg-sky-700 text-white px-8 py-4 rounded-md inline-block"
            >
              Get started
            </a>
          </div>
          <p class="text-center text-sm">
            &copy; 2025 Fullstack Bootcamp. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
}

export default App;
