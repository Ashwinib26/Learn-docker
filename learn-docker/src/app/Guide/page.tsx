// app/guide/page.tsx

import React from 'react';

const dockerTopics = [
  {
    title: "🧱 Docker Basics",
    items: [
      "What is Docker?",
      "Containers vs Virtual Machines",
      "Installing Docker on Windows/Linux/Mac",
      "Docker Architecture: Client, Daemon, Image, Container"
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
      "What is a Docker Image?",
      "DockerHub & Custom Registries",
      "Creating and Managing Containers",
      "Volumes and Persistent Data",
      "Dockerfile Basics with Example"
    ]
  },
  {
    title: "🛠️ Docker Compose",
    items: [
      "Why use Docker Compose?",
      "`docker-compose.yml` structure",
      "Example: Multi-container setup (Node.js + MongoDB)",
      "Docker Compose commands"
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
      <h1 className="text-4xl font-bold mb-6 text-blue-600">🚢 Docker Guide</h1>
      <p className="text-lg text-gray-700 mb-8">
        A complete beginner-to-advanced Docker learning resource. Click through the sections below to explore concepts, commands, and real-world applications.
      </p>
      
      <div className="space-y-6">
        {dockerTopics.map((topic, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{topic.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {topic.items.map((item, i) => (
                <li key={i}>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{item}</code>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidePage;
