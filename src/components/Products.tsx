import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const handleImageError = (productId: string) => {
    console.log(`Image failed to load for product: ${productId}`);
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  const handleImageLoad = (productId: string) => {
    console.log(`Image loaded successfully for product: ${productId}`);
    setLoadedImages(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-primary-50/80" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary-800 mb-4">
          Our Premium Products
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-16 max-w-2xl mx-auto">
          Choose from our selection of premium organic products, each carefully crafted to enhance your agricultural success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`
                relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-500
                ${hoveredProduct === product.id ? 'scale-[1.02] shadow-xl' : ''}
                flex flex-col min-h-[600px] overflow-hidden animate-float
              `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  {!imageErrors[product.id] ? (
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(product.id)}
                        onLoad={() => handleImageLoad(product.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-t-2xl flex items-center justify-center">
                      <span className="text-gray-400">Image not available</span>
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="absolute -top-10 right-8 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Starting from ₹{product.price}
                  </div>

                  <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-secondary-700 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-6 overflow-hidden">
                    {product.features.map((feature, index) => (
                      <p key={index} className="text-sm text-secondary-600 flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="bg-primary-50/50 p-4 rounded-xl mb-6">
                      {product.sizes.map((size) => (
                        <div key={size.id} className="flex justify-between items-center text-sm py-2 border-b border-primary-100 last:border-0">
                          <span className="text-secondary-700 font-medium">{size.name} ({size.weight})</span>
                          <span className="font-semibold text-primary-700">₹{size.price}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#order"
                      className="group/btn block text-center bg-primary-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5 transform group-hover/btn:rotate-12 transition-transform duration-300" />
                        Order Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;