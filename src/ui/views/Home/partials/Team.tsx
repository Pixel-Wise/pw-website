import React from 'react';
import { FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ana García",
    position: "CEO & Fundadora",
    description: "Líder visionaria con más de 10 años de experiencia en tecnología y gestión empresarial.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/ana-garcia"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "CTO",
    description: "Arquitecto de software senior con experiencia en desarrollo full-stack y arquitecturas escalables.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/carlos-rodriguez"
  },
  {
    id: 3,
    name: "María López",
    position: "Diseñadora UX/UI",
    description: "Diseñadora creativa especializada en experiencias de usuario intuitivas y interfaces modernas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/maria-lopez"
  },
  {
    id: 4,
    name: "David Martínez",
    position: "Desarrollador Senior",
    description: "Desarrollador full-stack con expertise en React, Node.js y bases de datos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/david-martinez"
  },
  {
    id: 5,
    name: "Sofia Hernández",
    position: "Project Manager",
    description: "Gestora de proyectos certificada PMP con experiencia en metodologías ágiles.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/sofia-hernandez"
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce nuestro equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra filosofía es simple: contratar un equipo de personas diversas y apasionadas 
            y fomentar una cultura que te empodere para hacer tu mejor trabajo.
          </p>
        </div>

        {/* Team Grid - 5 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay with content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{member.position}</p>
                    <p className="text-xs text-gray-300 mb-3 line-clamp-2">{member.description}</p>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-3">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <FaTwitter size={16} />
                      </a>
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                      <a
                        href="https://dribbble.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-400 transition-colors duration-200"
                      >
                        <FaDribbble size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Arrow icon in top right */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom content (always visible) */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos siempre buscando talento excepcional para unirse a nuestra familia. 
              Si compartes nuestra pasión por la tecnología, ¡nos encantaría conocerte!
            </p>
            <a
              href="mailto:careers@pixelwise.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Únete a nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

