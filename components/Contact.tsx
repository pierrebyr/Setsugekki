import { useState, FormEvent } from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUpVariants, fadeInRightVariants, easeOut } from '../animations';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject || formData.subject === 'default') {
      newErrors.subject = 'Veuillez sélectionner un sujet';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - uses environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Send email via EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
      } else {
        // Fallback: simulate API call for development
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setErrors({ message: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id={SectionId.CONTACT}
      className="py-32 px-6 bg-sumi text-yuki relative border-t border-white/10"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
        {/* Left: Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          transition={easeOut}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8">Contact</h2>
          <p className="text-lg font-serif text-gray-400 italic mb-12">
            Pour les demandes de booking, presse, ou collaboration.
          </p>

          <div className="space-y-12 mt-24">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Management
              </h4>
              <p className="text-2xl font-serif text-white mb-2">Blue Note Japan Productions</p>
              <p className="text-gray-400">Tokyo, Minato-ku</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Booking Europe (2026)
              </h4>
              <p className="text-xl font-serif text-gray-200">TBA / En négociations</p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <a
                href="mailto:contact@setsugekka.jp"
                className="group inline-flex items-center gap-4 text-3xl md:text-4xl font-serif hover:text-gray-300 transition-colors"
              >
                <span>contact@setsugekka.jp</span>
                <ArrowUpRight className="opacity-50 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRightVariants}
          transition={easeOut}
          className="bg-white/5 p-8 md:p-12 backdrop-blur-sm"
        >
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded flex items-center gap-3 text-green-400"
            >
              <CheckCircle size={20} />
              <span>Votre message a été envoyé avec succès !</span>
            </motion.div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-gray-500">
                Nom Complet *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl"
                placeholder="Votre nom"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-gray-500">
                Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl"
                placeholder="votre@email.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-xs uppercase tracking-widest text-gray-500">
                Sujet *
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl appearance-none cursor-pointer"
                aria-required="true"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                <option value="default" className="bg-sumi text-gray-400">
                  Sélectionner un sujet
                </option>
                <option value="booking" className="bg-sumi">
                  Booking Concert
                </option>
                <option value="press" className="bg-sumi">
                  Presse / Interview
                </option>
                <option value="other" className="bg-sumi">
                  Autre
                </option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="text-sm text-red-400 mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-gray-500">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl resize-none"
                placeholder="Votre message..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-400 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-sumi py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
