// pages/index.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  // Sample project data (you can replace this with your own project data)
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for Project 3',
    },
  ];

  const handleProjectClick = (projectId) => {
    // Implement navigation to a project detail page
    // You can use Next.js router for this purpose
  };

  return (
    <div className="bg-background-color min-h-screen text-text-color">
            <header className="header flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-6xl font-bold">Your Name</h1>
                    <p className="text-2xl mt-4">Web Developer | Graphic Designer</p>
                    <a href="#contact" className="btn mt-8">Contact Me</a>
                </div>
            </header>

            
            <section className="about mt-16  py-12 px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl mb-6">About Me</h2>
                        <p className="text-lg mb-8">
                            Welcome to my portfolio website! I am a passionate web developer and
                            graphic designer with a love for creating beautiful and functional
                            websites and designs.
                        </p>
                        <h3 className="text-2xl mb-4">What describes me:</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <span className="bg-primary-color text-white py-2 px-4 rounded-md">Creative</span>
                            <span className="bg-primary-color text-white py-2 px-4 rounded-md">Innovative</span>
                            <span className="bg-primary-color text-white py-2 px-4 rounded-md">Detail-oriented</span>
                            <span className="bg-primary-color text-white py-2 px-4 rounded-md">Collaborative</span>
                            {/* Add more descriptive words */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                        {/* Optionally add an image or illustration about yourself */}
                    </div>
                </div>
            </section>


            <section className="work mt-16 py-12">
                <h2 className="text-4xl text-center mb-12">My Work</h2>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            onClick={() => handleProjectClick(project.id)}
                        />
                    ))}
                </div>
            </section>


            <section id="contact" className="contact mt-16 py-12 ">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl mb-8">Let's Work Together</h2>
                    <p className="text-lg mb-4">Interested in collaborating or just want to say hi? Feel free to reach out!</p>
                    <div className="flex justify-center items-center flex-col md:flex-row">
                        <div className="mb-4 md:mb-0 md:mr-8">
                            <p className="text-lg">Email: <a href="mailto:your.email@example.com" className="underline">your.email@example.com</a></p>
                        </div>
                        <div>
                            <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/your-profile" className="underline">LinkedIn Profile</a></p>
                        </div>
                    </div>
                    {/* Optionally, you can add a contact form here */}
                </div>
            </section>

    </div>
  );
};

export default Home;
