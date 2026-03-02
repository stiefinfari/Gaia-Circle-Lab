import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import { useCookieConsent, type CookieConsent } from '../context/CookieContext';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const { 
    isBannerOpen, 
    toggleBanner, 
    acceptAll, 
    rejectAll, 
    savePreferences 
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Aggiorna lo stato locale quando si apre il banner
  // (In una implementazione reale potremmo voler leggere lo stato attuale dal context se già salvato)

  const handleAcceptAll = () => {
    acceptAll();
    toggleBanner(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    toggleBanner(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    toggleBanner(false);
  };

  const togglePreference = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Non modificabile
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isBannerOpen) return null;

  return (
    <AnimatePresence>
      {isBannerOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl text-white"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {/* Header e Descrizione */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-primary-400">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Rispetto della tua Privacy
                  </h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed max-w-4xl">
                  Utilizziamo cookie tecnici per garantire il funzionamento del sito e, previo tuo consenso, cookie analitici e di profilazione per migliorare la tua esperienza e mostrarti contenuti in linea con le tue preferenze. 
                  Puoi gestire le tue scelte in qualsiasi momento. Per maggiori dettagli, consulta la nostra <Link to="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link> e <Link to="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</Link>.
                </p>
              </div>
              
              {/* Pulsanti Azione Rapida */}
              {!showDetails && (
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[300px]">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    Accetta tutti
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-6 py-2.5 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    Rifiuta non essenziali
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex items-center justify-center px-4 py-2.5 text-gray-400 hover:text-white transition-colors text-sm underline decoration-gray-600 hover:decoration-white"
                  >
                    Personalizza
                  </button>
                </div>
              )}
            </div>

            {/* Sezione Dettagli Personalizzazione */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-white/10 mt-4">
                    {/* Tecnici */}
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                      <div className="mt-1 text-green-400">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Necessari</h4>
                        <p className="text-xs text-gray-400">Indispensabili per il funzionamento del sito. Non possono essere disattivati.</p>
                      </div>
                    </div>

                    {/* Analitici */}
                    <div 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors flex items-start gap-3 ${preferences.analytics ? 'bg-white/10 border-cyan-500/50' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                      onClick={() => togglePreference('analytics')}
                    >
                      <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${preferences.analytics ? 'bg-cyan-500 border-cyan-500' : 'border-gray-500'}`}>
                        {preferences.analytics && <Check className="w-3 h-3 text-black" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Analitici</h4>
                        <p className="text-xs text-gray-400">Ci aiutano a capire come visiti il sito per migliorarlo (Google Analytics anonimizzato).</p>
                      </div>
                    </div>

                    {/* Profilazione */}
                    <div 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors flex items-start gap-3 ${preferences.marketing ? 'bg-white/10 border-purple-500/50' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                      onClick={() => togglePreference('marketing')}
                    >
                      <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${preferences.marketing ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}>
                        {preferences.marketing && <Check className="w-3 h-3 text-black" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Marketing</h4>
                        <p className="text-xs text-gray-400">Utilizzati per inviarti pubblicità in linea con le tue preferenze.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4 pt-4 border-t border-white/10">
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-2 bg-transparent text-gray-300 hover:text-white text-sm font-medium transition-colors"
                    >
                      Rifiuta tutto
                    </button>
                     <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2 bg-white/10 text-white hover:bg-white/20 rounded-lg text-sm font-medium transition-colors border border-white/10"
                    >
                      Accetta tutto
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-8 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
                    >
                      Salva preferenze
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
