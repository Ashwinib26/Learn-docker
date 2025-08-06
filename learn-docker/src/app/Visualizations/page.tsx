// app/visualizations/page.tsx

import React from 'react';

const dockerImages = [
  {
    title: "Docker Architecture",
    description: "Shows how the Docker client communicates with the Docker daemon to build, run, and manage containers.",
    src: "https://k21academy.com/wp-content/uploads/2020/05/2020-05-12-16_37_26-PowerPoint-Slide-Show-Azure_AZ104_M01_Compute_ed1.png"
  },
  {
    title: "Containers vs Virtual Machines",
    description: "Visual comparison between traditional VMs and Docker containers running on the same system.",
    src: "https://s7280.pcdn.co/wp-content/uploads/2018/07/containers-vs-virtual-machines.jpg"
  },
  {
    title: "Docker Image to Container Lifecycle",
    description: "Illustrates how Docker images are used to create containers and how they run.",
    src: "https://www.atatus.com/blog/content/images/2023/06/docker-container-lifecycle-management.png"
  },
  {
    title: "Docker Use Cases",
    description: "Explores various scenarios where Docker can be effectively utilized.",
    src: "https://cdn.prod.website-files.com/60f8ffe4d3ddfa64654d6667/6565799a5b55bff7eb044b4b_docker%20vs%20kubernets.webp"
  }
];

const VisualizationsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-rose-400 mb-8">📊 Docker Visualized</h1>
      <p className="text-gray-400 text-lg mb-10">
        Visual explanations are powerful. Below are images and videos that help you understand how Docker works at a deeper level — from its architecture to the container lifecycle.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {dockerImages.map((img, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border">
            <img src={img.src} alt={img.title} className="w-full object-cover h-64" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-rose-900 mb-2">{img.title}</h2>
              <p className="text-rose-300 text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default VisualizationsPage;
