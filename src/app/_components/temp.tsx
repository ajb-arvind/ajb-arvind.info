'use client';
import { ReactLenis } from 'lenis/react';
export default function Temp() {
  return (
    <main className="bg-black">
      <section className="text-white   w-full bg-slate-950  ">
        <div className="grid grid-cols-2 px-8">
          <div className="grid gap-2">
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
              />
            </figure>
          </div>
          <div className="sticky top-0 h-screen grid place-content-center">
            <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
              Copied & Paste Every Component you want and make an creative
              website 😎
            </h1>
          </div>
        </div>
      </section>
      <footer className="group bg-slate-950 ">
        <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-linear-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
          ui-layout
        </h1>
        <section className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">
          Thanks for Scrolling
        </section>
      </footer>
    </main>
  );
}
