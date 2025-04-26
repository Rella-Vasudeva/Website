import React from 'react';
import { benefits } from '../data/products';
import { Layers, Sprout, Bug, CheckCircle, Recycle, Clock } from 'lucide-react';

const iconMap = {
  'layers': Layers,
  'sprout': Sprout,
  'bug': Bug,
  'check-circle': CheckCircle,
  'recycle': Recycle,
  'clock': Clock,
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary-800 mb-4">
          Why Choose Our Products?
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-16 max-w-2xl mx-auto">
          Discover the advantages of our organic fertilizers and how they can transform your agricultural success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    {Icon && <Icon className="w-8 h-8 text-primary-600 transform group-hover:scale-110 transition-transform duration-300" />}
                  </div>
                  <div className="absolute -inset-4 bg-primary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;