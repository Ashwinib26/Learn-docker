// app/guide/page.tsx

import React from 'react';

const dockerTopics = [
  {
    title: "🧱 Docker Basics",
    items: [
        "Docker is an open-source platform designed to automate the deployment, scaling, and management of applications using containerization. It allows developers to package applications with all their dependencies into a standardized unit — called a container — that runs consistently across different environments.",
        "Docker Architecture: Client, Daemon, Image, Container",
        "Docker offers lightweight, fast, and consistent containerized environments across platforms, enabling simplified configuration, secure isolation, rapid deployment, and efficient version control."
    ]
  },
  {
    title: "⚙️ Core Docker Commands",
    items: [
      "`docker --version` - Check Docker version",
      "`docker run` - Run a container",
      "`docker ps` - List running containers",
      "`docker build` - Build an image from Dockerfile",
      "`docker exec` - Run command inside container",
      "`docker stop/start/restart` - Control containers"
    ]
  },
  {
    title: "📦 Docker Images & Containers",
    items: [
        "Docker Image: A Docker Image is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software—code, runtime, libraries, environment variables, and configuration files.",
        "           ➤ Used as a blueprint to create containers.",
        "           ➤ Built using a Dockerfile, which contains step-by-step instructions to assemble the image.",

        "Docker Container: A Docker Container is a running instance of a Docker Image. It is an isolated environment where applications execute with their dependencies bundled in.",
        "           ➤ Containers can be started, stopped, moved, or deleted—each behaves like a lightweight virtual machine.",
        "           ➤ Multiple containers can run on the same host, sharing the OS kernel but isolated from each other.",
    ]
},
  {
    title: "🚀 Real-World Use Cases",
    items: [
      "Dockerizing a React App",
      "Setting up a Flask API with Docker",
      "Using Docker in CI/CD pipelines",
      "Best Practices for Production"
    ]
  }
];

const GuidePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6 text-rose-400">🚢 Docker Guide</h1>
      <p className="text-lg text-gray-400 mb-8">
        A complete beginner-to-advanced Docker learning resource. Click through the sections below to explore concepts, commands, and real-world applications.
      </p>
      
      <div className="space-y-6">
        {dockerTopics.map((topic, idx) => (
          <div key={idx} className="bg-rose-100 shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-rose-900">{topic.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {topic.items.map((item, i) => (
                <li key={i}>
                  <code className="px-2 py-1 rounded text-sm">{item}</code>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
            href="/Docker_Usage_Guide.pdf"
            download
            className="inline-block rounded-full px-6 py-3 bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition"
        >
            ⬇️ Download: How to Use a Docker Image (PDF)
        </a>
    </div>
    </div>
  );
};

export default GuidePage;
