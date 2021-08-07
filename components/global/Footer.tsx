import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {[
            { link: "mailto:saratogaasb20@gmail.com", icon: faEnvelope },
            { link: "https://www.instagram.com/shsasb/", icon: faInstagram },
            {
              link: "https://www.facebook.com/groups/saratogahs202122",
              icon: faFacebook,
            },
          ].map(({ link, icon }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={icon} className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400 hover:text-gray-500">
          <a
            href="https://www.saratogahigh.org/student_life/a_s_b"
            className="underline"
          >
            Official Saratoga High ASB Webpage
          </a>
        </p>
      </div>
    </footer>
  );
}
