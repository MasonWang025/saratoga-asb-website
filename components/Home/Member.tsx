import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Member({
  name,
  role,
  bio,
  email,
  instagram,
  facebook,
  imgSrc,
}) {
  return (
    <li className="sm:py-8">
      <div className="grid grid-cols-12 items-start gap-6 space-y-0">
        <div className="col-span-6 sm:col-span-3">
          <img
            className="w-fill h-fill object-cover shadow-lg rounded-lg bg-gray-900"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="space-y-4">
            <div className="text-xl sm:text-2xl font-medium space-y-1">
              <h3 className="text-3xl font-bold mb-2">{name}</h3>
              <p className="text-toga-primary-main">{role}</p>
            </div>
            <div className="text-lg text-gray-500 ">
              <div className="space-y-2">
                <p>{bio}</p>
              </div>
            </div>
            <ul className="flex space-x-5">
              {[
                { link: email, icon: faEnvelope },
                { link: instagram, icon: faInstagram },
                { link: facebook, icon: faFacebook },
              ].map(({ link, icon }) => (
                <li key={link}>
                  <a href={link} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
