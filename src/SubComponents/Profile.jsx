import React from "react";
import blackimg from "../assets/Black_colour.jpg";
import gfg from "../assets/gfg.png"
import leetcode from "../assets/leetcode.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/git.png"

const Profile = () => {
  const profileList = [
    {
      img: leetcode,
      name: "LeetCode",
      profile: "https://leetcode.com/u/karthigeyan_02/",
      achievements: "Solved 450+ problems",
    },
    {
      img: github,
      name: "GitHub",
      profile: "https://github.com/KARTHIGEYAN10",
      achievements: "5+ repositories",
    },
    {
      img: gfg,
      name: "GeeksForGeeks",
      profile: "https://www.geeksforgeeks.org/profile/karthigeyanbalagsrm?tab=activity",
      achievements: "Problem Solver",
    },
    {
      img: linkedin,
      name: "LinkedIn",
      profile: "https://www.linkedin.com/in/karthigeyan-b-3654b731b/",
      achievements: "Active professional profile",
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {profileList.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.name}
            className="h-24 w-24 object-cover rounded-full mb-4"
          />

          {/* Name & Achievements */}
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600 mb-3">
            {item.achievements}
          </p>

          {/* Profile Link */}
          <a
            href={item.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
          >
            Visit Profile →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Profile;
