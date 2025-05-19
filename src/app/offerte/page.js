'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const products = [
  { id: 'veranda', name: 'Veranda' },
  { id: 'carport', name: 'Carport' },
  { id: 'terrasoverkapping', name: 'Terrasoverkapping' },
  { id: 'kozijnen', name: 'Kozijnen' },
  { id: 'schuifpuien', name: 'Schuifpuien' },
  { id: 'zonweringen', name: 'Zonweringen' },
  { id: 'rolluiken', name: 'Rolluiken' },
  { id: 'keramische-tegels', name: 'Keramische Tegels' }
];

function OffertePageContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (productParam) {
      const product = products.find(p => p.name === productParam);
      if (product) {
        setValue('product', product.id);
      }
    }
  }, [productParam, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navigation />
      
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-16 md:pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Offerte Aanvragen
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Vraag een vrijblijvende offerte aan voor uw project. Wij nemen binnen 24 uur contact met u op.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Bedankt voor uw aanvraag!
                </h2>
                <p className="text-green-700 text-lg">
                  We nemen zo spoedig mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-xl shadow-lg p-8 overflow-hidden">
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-gray-800/25 to-gray-700/20 rounded-2xl"></div>
                {/* Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 rounded-2xl"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Naam */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Naam is verplicht' })}
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is verplicht',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Ongeldig email adres'
                        }
                      })}
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: 'Telefoonnummer is verplicht' })}
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Product */}
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-white mb-1">
                      Product *
                    </label>
                    <select
                      id="product"
                      {...register('product', { required: 'Selecteer een product' })}
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    >
                      <option value="">Selecteer een product</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                    {errors.product && (
                      <p className="mt-1 text-sm text-red-400">{errors.product.message}</p>
                    )}
                  </div>

                  {/* Beschrijving */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
                      Beschrijving van uw aanvraag *
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      {...register('description', { required: 'Beschrijving is verplicht' })}
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    ></textarea>
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:scale-[1.02]"
                    >
                      {isSubmitting ? 'Verzenden...' : 'Verstuur aanvraag'}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-red-400 text-center">
                      Er is een fout opgetreden. Probeer het later opnieuw.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function OffertePage() {
  return (
    <Suspense>
      <OffertePageContent />
    </Suspense>
  );
} 