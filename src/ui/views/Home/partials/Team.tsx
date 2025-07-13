import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

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
    description: "Líder visionaria con más de 10 años de experiencia en tecnología y gestión empresarial. Especialista en transformación digital.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/ana-garcia"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "CTO",
    description: "Arquitecto de software senior con experiencia en desarrollo full-stack y arquitecturas escalables. Experto en tecnologías cloud.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/carlos-rodriguez"
  },
  {
    id: 3,
    name: "María López",
    position: "Diseñadora UX/UI",
    description: "Diseñadora creativa especializada en experiencias de usuario intuitivas y interfaces modernas. Enfoque en diseño centrado en el usuario.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/maria-lopez"
  },
  {
    id: 4,
    name: "David Martínez",
    position: "Desarrollador Senior",
    description: "Desarrollador full-stack con expertise en React, Node.js y bases de datos. Apasionado por el código limpio y las mejores prácticas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/david-martinez"
  },
  {
    id: 5,
    name: "Sofia Hernández",
    position: "Project Manager",
    description: "Gestora de proyectos certificada PMP con experiencia en metodologías ágiles. Especialista en coordinación de equipos multidisciplinarios.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/sofia-hernandez"
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Equipo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible cada proyecto. 
            Un equipo multidisciplinario comprometido con la excelencia y la innovación.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-blue-400/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {member.name}
                </h3>
                
                <p className="text-blue-400 font-medium mb-4">
                  {member.position}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-300 mb-6">
              Estamos siempre buscando talento excepcional para unirse a nuestra familia. 
              Si compartes nuestra pasión por la tecnología, ¡nos encantaría conocerte!
            </p>
            <a
              href="mailto:careers@pixelwise.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Únete a nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

