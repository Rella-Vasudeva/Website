import React, { useState } from 'react';
import { products } from '../data/products';
import type { FormState } from '../types';

const OrderSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedProduct: '',
    selectedSize: '',
    quantity: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try {
      // Validate phone number
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formState.phone)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      // Validate email only if provided
      if (formState.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email)) {
          throw new Error('Please enter a valid email address');
        }
      }

      // Here you would typically send the form data to your backend
      console.log(formState);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setFormState({
        name: '',
        email: '',
        phone: '',
        address: '',
        selectedProduct: '',
        selectedSize: '',
        quantity: 1,
        message: ''
      });
      
      alert('Order submitted successfully! We will contact you shortly.');
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setFormError(null); // Clear error when user makes changes
  };

  const selectedProductSizes = products.find(p => p.id === formState.selectedProduct)?.sizes || [];

  return (
    <section id="order" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary-800 mb-4">
          Place Your Order
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-12 max-w-2xl mx-auto">
          Fill out the form below to order our premium vermicompost products. We'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          {formError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {formError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter 10-digit number"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-secondary-700 mb-1">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formState.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter delivery address"
              />
            </div>

            <div>
              <label htmlFor="selectedProduct" className="block text-sm font-medium text-secondary-700 mb-1">
                Select Product <span className="text-red-500">*</span>
              </label>
              <select
                id="selectedProduct"
                name="selectedProduct"
                value={formState.selectedProduct}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Choose a product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="selectedSize" className="block text-sm font-medium text-secondary-700 mb-1">
                Select Size <span className="text-red-500">*</span>
              </label>
              <select
                id="selectedSize"
                name="selectedSize"
                value={formState.selectedSize}
                onChange={handleChange}
                required
                disabled={!formState.selectedProduct}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Choose a size</option>
                {selectedProductSizes.map(size => (
                  <option key={size.id} value={size.id}>
                    {size.name} ({size.weight}) - ₹{size.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-secondary-700 mb-1">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formState.quantity}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Any special instructions or requirements?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              mt-6 w-full font-medium py-3 px-6 rounded-lg transition-all duration-200
              ${isSubmitting 
                ? 'bg-primary-400 cursor-not-allowed' 
                : 'bg-primary-600 hover:bg-primary-700'
              }
              text-white
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Order'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;