function Home() {
  return (
    <>
      {/* HERO */}

<section
  className="relative min-h-[75vh] md:h-[90vh] bg-cover bg-center flex items-center"
  style={{
    backgroundImage: "url('/hero.jpeg')",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white py-20 md:py-0">

    <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
      Climate Action. Measured. Rewarded. Scaled.
    </p>

    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl max-w-3xl md:max-w-4xl leading-tight">
      Localizing Climate Education,
      Verifying Climate Action
    </h1>

    <p className="mt-6 md:mt-8 max-w-xl md:max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-gray-200">
      PlanetCred exists to localize climate education across Africa
      and build trusted systems that make grassroots climate action
      visible, verified, and valued.
    </p>

    <div className="mt-8 md:mt-10 flex flex-row gap-3 flex-wrap">

      <a
        href="/projects"
        className="bg-primary text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap"
      >
        Explore Our Work
      </a>

      <a
        href="https://t.me/planetcred"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap"
      >
        Join Community
      </a>

    </div>

  </div>
</section>

      {/* STATS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="font-heading text-5xl text-primary">
                500+
              </h2>

              <p className="mt-3 text-gray-600">
                People Reached
              </p>
            </div>

            <div>
              <h2 className="font-heading text-5xl text-primary">
                3
              </h2>

              <p className="mt-3 text-gray-600">
                Languages Supported
              </p>
            </div>

            <div>
              <h2 className="font-heading text-5xl text-primary">
                3
              </h2>

              <p className="mt-3 text-gray-600">
                Flagship Initiatives
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

<section className="py-24 bg-background">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <h2 className="font-heading text-5xl mb-10">
      About PlanetCred
    </h2>

    {/* FULL-WIDTH BANNER */}

    <img
      src="/about.jpeg"
      alt="PlanetCred climate education activities"
      className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-lg mb-12"
    />

    {/* TEXT */}

    <div className="max-w-4xl">

      <p className="text-gray-700 leading-9 text-lg">
        PlanetCred exists to localize climate education across Africa
        and build trusted systems that make grassroots climate action
        visible, verified, and valued.
      </p>

      <p className="text-gray-700 leading-9 text-lg mt-6">
        We believe climate education should begin with local realities,
        local languages, and community experience. Young Africans must
        not simply participate in climate solutions..they must understand,
        own, verify, and lead them.
      </p>

      <blockquote className="mt-10 text-3xl font-heading italic text-primary">
        “A world where climate action is visible, verified,
        and valued from the grassroots up.”
      </blockquote>

    </div>

  </div>

</section>

      {/* FEATURED INITIATIVES */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="font-heading text-5xl mb-16">
            Featured Initiatives
          </h2>

          <div className="space-y-12">

            {/* Initiative 1 */}

            <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-10">

              <a
                href="https://www.instagram.com/reel/DSIqCz2DHNb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/home1.PNG"
                  alt="Youth Climate Literacy"
                  className="w-72 h-44 object-cover rounded-3xl hover:scale-105 transition"
                />
              </a>

              <div>

                <h3 className="font-heading text-3xl">
                  PlanetCred Youth Climate Literacy & Action Research
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Our flagship initiative exploring how young Nigerians
                  understand climate change and participate in meaningful
                  environmental action.
                </p>

              </div>

            </div>

            {/* Initiative 2 */}

<div className="flex flex-col md:flex-row gap-8 items-start border-b pb-10">

  <a
    href="https://www.linkedin.com/posts/hauwabubakar_climateeducation-nigeria-planetcred-activity-7461795277021196288-Wrjc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9I-4kBskSSWSJfqonZStJh3lxTeGkGF_0"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0"
  >
    <img
      src="/featured3.PNG"
      alt="Climate Speaks Your Language"
      className="w-72 h-44 min-w-[18rem] object-cover rounded-3xl hover:scale-105 transition"
    />
  </a>

  <div className="flex-1">

    <h3 className="font-heading text-3xl">
      Climate Speaks Your Language
    </h3>

    <p className="mt-4 text-gray-600 leading-8">
      Climate education resources delivered in English,
      Hausa, and Nigerian Pidgin for specific age groups
      so environmental knowledge becomes more accessible
      and actionable.
    </p>

  </div>

</div>

            {/* Initiative 3 */}

            <div className="flex flex-col md:flex-row gap-8 items-center">

              <a
                href="https://www.linkedin.com/posts/hauwabubakar_climateaction-climateeducation-africa-ugcPost-7474068299534807040-6-8W?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9I-4kBskSSWSJfqonZStJh3lxTeGkGF_0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/tour.jpg"
                  alt="African Grassroots Climate Education Tour"
                  className="w-72 h-44 object-cover rounded-3xl hover:scale-105 transition"
                />
              </a>

              <div>

                <h3 className="font-heading text-3xl">
                  African Grassroots Climate Education Tour
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Community engagement activities bringing climate
                  conversations directly into grassroots
                  communities across Africa.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;