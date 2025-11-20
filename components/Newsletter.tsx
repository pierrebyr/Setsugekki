import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic email validation
    if (!email.trim()) {
      setErrorMessage('Veuillez entrer votre email');
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Email invalide');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const newsletterTemplateId = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && newsletterTemplateId && publicKey) {
        await emailjs.send(
          serviceId,
          newsletterTemplateId,
          { subscriber_email: email },
          publicKey
        );
      } else {
        // Fallback for development
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setStatus('success');
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
        Newsletter
      </h4>
      <p className="text-sm text-gray-500 mb-4">
        Recevez les actualités du trio et dates de concerts.
      </p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-400 text-sm"
        >
          <CheckCircle size={16} />
          <span>Inscription confirmée !</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="votre@email.com"
              className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-colors"
              aria-label="Adresse email pour la newsletter"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-sumi px-4 py-3 flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="S'inscrire à la newsletter"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">...</span>
              ) : (
                <Mail size={14} />
              )}
            </button>
          </div>

          {status === 'error' && errorMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-red-400 text-xs"
            >
              <AlertCircle size={12} />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </form>
      )}
    </div>
  );
};
