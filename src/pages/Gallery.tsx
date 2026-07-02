function Gallery() {
  const images = Array.from(
    { length: 19 },
    (_, i) => `/gallery${i + 1}.jpeg`
  );

  return (
    <>
      {/* HERO */}

      <section className="py-24 bg-background">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

          <p className="uppercase tracking-[0.3em] text-primary text-sm mb-4">
            PlanetCred Gallery
          </p>

          <h1 className="font-heading text-5xl md:text-7xl leading-tight">
            Moments From Our Journey
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            Photos from PlanetCred projects, school outreach activities,
            community engagements, climate education programs, and
            grassroots environmental action across Nigeria.
          </p>

        </div>

      </section>

      {/* GALLERY */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

            {images.map((image, index) => (

              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-3xl group"
              >

                <img
                  src={image}
                  alt={`PlanetCred Gallery ${index + 1}`}
                  className="
                    w-full
                    rounded-3xl
                    shadow-md
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <blockquote className="font-heading text-4xl italic text-primary leading-relaxed">
            “When Climate Education is Localized,
             Climate Action Becomes Inevitable.”
            ~honeyhauwa
          </blockquote>

        </div>

      </section>

    </>
  );
}

export default Gallery;