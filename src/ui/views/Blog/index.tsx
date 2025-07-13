import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Las Tendencias de Desarrollo Web en 2024",
    excerpt: "Descubre las últimas tendencias en desarrollo web que están transformando la industria tecnológica este año.",
    date: "15 de Enero, 2024",
    author: "PixelWise Team",
    category: "Desarrollo Web",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Cómo Optimizar tu Sitio Web para SEO",
    excerpt: "Aprende las mejores prácticas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.",
    date: "10 de Enero, 2024",
    author: "PixelWise Team",
    category: "SEO",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "La Importancia del Diseño UX/UI",
    excerpt: "Explora cómo un buen diseño de experiencia de usuario puede transformar tu negocio digital.",
    date: "5 de Enero, 2024",
    author: "PixelWise Team",
    category: "Diseño",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Desarrollo de Apps Móviles: React Native vs Flutter",
    excerpt: "Comparamos las dos principales tecnologías para el desarrollo de aplicaciones móviles multiplataforma.",
    date: "28 de Diciembre, 2023",
    author: "PixelWise Team",
    category: "Desarrollo Móvil",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Seguridad en Aplicaciones Web",
    excerpt: "Conoce las mejores prácticas para proteger tu aplicación web contra las amenazas más comunes.",
    date: "20 de Diciembre, 2023",
    author: "PixelWise Team",
    category: "Seguridad",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Cloud Computing: AWS vs Azure vs Google Cloud",
    excerpt: "Una comparación detallada de las principales plataformas de computación en la nube para tu negocio.",
    date: "15 de Diciembre, 2023",
    author: "PixelWise Team",
    category: "Cloud",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  }
];

const categories = ["Todos", "Desarrollo Web", "SEO", "Diseño", "Desarrollo Móvil", "Seguridad", "Cloud"];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">PixelWise</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las últimas tendencias, consejos y mejores prácticas en desarrollo web, 
            diseño y tecnología. Mantente actualizado con nuestros expertos.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de lectura</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Por {post.author}</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Suscríbete a nuestro Newsletter
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Recibe las últimas noticias, artículos y recursos directamente en tu bandeja de entrada. 
            Sin spam, solo contenido de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

