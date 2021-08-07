import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="pt-16">
        {/* Hero card */}
        <div className="relative sm:pt-8  bg-gray-100">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/img/bg/home-hero.png"
                  alt="People working on laptops"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{ backgroundColor: "#101a40dd" }}
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <div className="flex-shrink-0 items-center">
                    <span className="text-white">Saratoga </span>
                    <span className="text-red-200">ASB</span>
                  </div>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-lg text-gray-300 sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="https://docs.google.com/document/d/1g5c-Fni-kuEM12B4XbCuNENkY_Hlt5B6QWauKkmOGHY/edit"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-toga-secondary bg-white hover:bg-gray-50 sm:px-8"
                    >
                      Club Application
                    </a>
                    <Link href="/clubs/club-match">
                      <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                        {" "}
                        Club Match
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
