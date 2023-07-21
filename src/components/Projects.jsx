import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SI PERPUS",
      description:
        "Sistem Informasi Perpustakaan aims to manage books on library. The main feature of this website is create, update, delete books. Using firebase as a cloud storage made this website efficient to manage data live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "APP MR. JACK",
      description:
        "Java is the most popular programming language using Object Oriented Programming (OOP). In this project, I created application for cashier management system in Warung Mr. Jack. The main feature for user admin is create, delete, update products, order processing, and print receipt",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "WEB Kampoeng Ilmu",
      description:
        "Kampoeng Ilmu is the largest center for bookstore in Surabaya, located at Jl. Semarang No.55, Surabaya. The main feature for end-users is displayed catalog products, order products, checkout, and receiving print order. While admin user can CRUD products, order processing, and sales report",
      photo: "/src/assets/projects/img3.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  About me
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  Projects
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
