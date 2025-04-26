import React from 'react';
import { processSteps } from '../data/products';
import { Leaf, Recycle, Bug, Filter, Package } from 'lucide-react';

const iconMap = {
  'leaf': Leaf,
  'recycle': Recycle,
  'worm': Bug,
  'filter': Filter,
  'package': Package,
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary-800 mb-4">
          Our Production Process
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-12 max-w-2xl mx-auto">
          Learn how we create our premium organic fertilizers through a carefully managed process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  {Icon && <Icon className="h-8 w-8 text-primary-600" />}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-700">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-primary-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;