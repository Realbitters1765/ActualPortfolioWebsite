import React from 'react';
import Link from 'next/link';

export default function TechnicalArt() {
  return (
    <>\
      <section className="h-[8%] pt-[3%] leading-[84%] pb-[3%] bg-black flex 2xl:h-[8%] 2xl:pt-[3%] 2xl:leading-[84%] 2xl:pb-[3%] 2xl:bg-black">
        <div className="pl-[10%] w-1/2 2xl:w-[40%] 2xl:pl-[10%]">
          <Link
            href="/"
            className="text-white bg-primary px-4 py-2 rounded-global inline-block rounded-lg hover:bg-opacity-90 transition-all 2xl:pl-[2%] 2xl:bg-secondary-500"
          >
            Go Back
          </Link>
        </div>
        <div className="w-1/2">
          <h2 className="font-heading text-white text-3xl 2xl:text-[358%] 2xl: 2xl:font-heading 2xl:text-white">
            Technical Art
          </h2>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-center text-2xl font-semibold capitalize text-white lg:text-3xl 2xl:text-white">
            AeroResort Shaders
          </h2>
          <p className="font-mono mt-4 text-center text-white 2xl:text-gray-300 2xl:font-mono">
            These shaders were created using unity's shader graph.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="/WaterShaderImg2.png"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">Water Shader</h2>
            </div>
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="/FullScreenShadeer.png"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">Fullscreen Shaders</h2>
            </div>
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="/WaterShaderImg1.png"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="font-sans mt-4 text-xl font-semibold capitalize text-white">Procedural sand shader</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-center text-2xl font-semibold capitalize text-black lg:text-3xl">
            Procedural Content Generation
          </h2>
          <p className="font-mono mt-4 text-center text-gray-600">
            created in both unreal engine and unity
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:gap-12">
            <div>
              <img
                className="h-96 w-full object-cover rounded-3xl"
                src="/PCGCAVE.png"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-black">
                Random Path Cave Generation
              </h2>
            </div>
            <div>
              <img
                className="h-96 w-full object-cover rounded-3xl"
                src="/PCGMAZE.png"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-black">
                Procedurally generated 3D Maze
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-center text-2xl font-semibold capitalize text-white lg:text-3xl 2xl:text-white">
            VFX
          </h2>
          <p className="font-mono mt-4 text-center text-white 2xl:text-gray-300 2xl:font-mono">
            These visual effects were all made in unity's visual effect graph
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&amp;amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;amp;auto=format&amp;amp;fit=crop&amp;amp;w=1565&amp;amp;q=80"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                
                Best website collections
              </h2>
            </div>
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&amp;amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;amp;auto=format&amp;amp;fit=crop&amp;amp;w=764&amp;amp;q=80"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                
                Block of Ui kit collections
              </h2>
            </div>
            <div>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&amp;amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;amp;auto=format&amp;amp;fit=crop&amp;amp;w=1470&amp;amp;q=80"
                alt=""
                loading="lazy"
                height=""
                width=""
              />
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                
                Ton's of mobile mockup
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-white font-medium"> Contact Me</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl 2xl:text-white">
              Open to Work!
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="bg-primary-100/80 text-white rounded-full p-3 dark:bg-gray-800">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                  </svg>
                </span>
              </span>
              <h2 className="mt-4 text-lg font-medium text-white"> Email </h2>
              <p className="text-white mt-2">jacobpollard.work@gmail.com</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center"></div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="bg-primary-100/80 text-white rounded-full p-3 dark:bg-gray-800">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                  </svg>
                </span>
              </span>
              <h2 className="mt-4 text-lg font-medium text-white"> Phone </h2>
              <p className="text-white mt-2">+61 402 552 950</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
