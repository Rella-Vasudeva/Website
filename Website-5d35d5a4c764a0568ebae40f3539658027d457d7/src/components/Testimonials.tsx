import React, { useState } from 'react';
import { testimonials } from '../data/products';
import { Quote, Star, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-white/80 to-primary-50/90" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-16 max-w-2xl mx-auto">
          Read about the experiences of farmers who have transformed their yields with our organic fertilizers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`
                  relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 
                  shadow-lg transition-all duration-500 h-full
                  ${hoveredCard === testimonial.id ? 'scale-[1.02] shadow-xl' : ''}
                  animate-float
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon with Gradient */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <p className="text-secondary-700 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-6 border-t border-primary-100">
                    <div className="flex items-center gap-4">
                      {/* User Icon */}
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary-600" />
                      </div>
                      
                      {/* Name and Role */}
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-primary-800 text-lg group-hover:text-primary-600 transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* Star Rating */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 transform transition-all duration-300 ${
                              hoveredCard === testimonial.id
                                ? 'text-yellow-400 scale-110'
                                : 'text-primary-300'
                            }`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
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

export default Testimonials;