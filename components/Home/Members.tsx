import React from "react";
import people from "./../../data/people";
import Member from "./Member";

export default function Members() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            {people.map((person) => {
              let key = person.name.replace(/\s+/g, "-").toLowerCase();
              return (
                <div key={key}>
                  <Member
                    name={person.name}
                    role={person.role}
                    bio={person.bio}
                    email={"mailto:" + person.email}
                    instagram={person.instagram}
                    facebook={person.facebook}
                    imgSrc={`/img/people/${key}.jpg`}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
