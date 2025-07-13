import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede implementar la lógica para enviar la cotización
    console.log('Datos de cotización:', formData);
    alert('¡Gracias por tu solicitud! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cotiza tu <span className="text-blue-500">Proyecto</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te proporcionaremos una cotización personalizada 
            adaptada a tus necesidades específicas.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información Personal */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
            </div>

            {/* Información del Proyecto */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Detalles del Proyecto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="software-a-medida">Software a la medida</option>
                    <option value="desarrollo-app">Desarrollo de App</option>
                    <option value="consultoria-tecnologica">Consultoría tecnológica</option>
                    <option value="desarrollo-web">Desarrollo páginas web</option>
                    <option value="seguridad-datos">Seguridad de datos</option>
                    <option value="stream-service">Stream Service</option>
                    <option value="renta-servidores">Renta de Servidores</option>
                    <option value="infraestructura-servicio">Infraestructura como servicio</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="5k-15k">$5,000 - $15,000 USD</option>
                    <option value="15k-30k">$15,000 - $30,000 USD</option>
                    <option value="30k-50k">$30,000 - $50,000 USD</option>
                    <option value="50k-100k">$50,000 - $100,000 USD</option>
                    <option value="100k+">$100,000+ USD</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Tiempo estimado
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un tiempo</option>
                    <option value="1-3-meses">1-3 meses</option>
                    <option value="3-6-meses">3-6 meses</option>
                    <option value="6-12-meses">6-12 meses</option>
                    <option value="12+-meses">12+ meses</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Descripción del Proyecto */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Descripción del proyecto *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe tu proyecto en detalle: objetivos, funcionalidades requeridas, usuarios objetivo, etc."
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Enviar Solicitud de Cotización
              </button>
              <Link
                to="/"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>

        {/* Información adicional */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">¿Necesitas ayuda?</h3>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre tu proyecto o necesitas asesoría, no dudes en contactarnos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:contacto@pixelwise.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📧 contacto@pixelwise.com
              </a>
              <a 
                href="tel:+525556061840" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📞 +52 55 5606 1840
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

