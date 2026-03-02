import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, Info, Settings, ShieldCheck, ToggleRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCookieConsent } from '../context/CookieContext';

const CookiePolicy = () => {
  const { toggleBanner } = useCookieConsent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Header />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-600">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12 text-gray-300 leading-relaxed">
            
            {/* Introduzione */}
            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <Cookie className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white m-0">Cosa sono i Cookie?</h2>
              </div>
              <p>
                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, memorizzazione delle preferenze, ecc.
                <br /><br />
                Per maggiori informazioni sul trattamento dei dati personali, consulta la nostra <Link to="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => toggleBanner(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  Modifica Preferenze Cookie
                </button>
              </div>
            </section>

            {/* Tipologie */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Info className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white m-0">Tipologie di Cookie Utilizzati</h2>
              </div>
              
              <div className="grid gap-6">
                {/* Tecnici */}
                <div className="bg-white/5 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-white m-0">Cookie Tecnici (Necessari)</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Sempre attivi</p>
                  <p>
                Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta alle azioni da te effettuate che costituiscono una richiesta di servizi, come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
              </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• <strong>Sessione:</strong> Garantiscono la normale navigazione e fruizione del sito web.</li>
                    <li>• <strong>Funzionali:</strong> Permettono all'utente la navigazione in funzione di una serie di criteri selezionati (es. la lingua) al fine di migliorare il servizio reso.</li>
                  </ul>
                </div>

                {/* Analitici */}
                <div className="bg-white/5 p-6 rounded-xl border-l-4 border-cyan-500">
                  <div className="flex items-center gap-3 mb-2">
                    <ToggleRight className="w-6 h-6 text-cyan-500" />
                    <h3 className="text-xl font-bold text-white m-0">Cookie Analitici</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Richiedono consenso</p>
                  <p>
                    Questi cookie ci permettono di contare le visite e fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e vedere come i visitatori si muovono all'interno del sito. Tutte le informazioni raccolte dai cookie sono aggregate e quindi anonime.
                  </p>
                  <div className="mt-4 p-4 bg-black/30 rounded border border-white/10 text-sm">
                    <strong>Google Analytics 4 (GA4):</strong> Utilizziamo GA4 con anonimizzazione IP attivata. I dati vengono conservati per 14 mesi.
                    <br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mt-2 inline-block">Privacy Policy di Google</a>
                  </div>
                </div>

                {/* Marketing */}
                <div className="bg-white/5 p-6 rounded-xl border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-2">
                    <ToggleRight className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-bold text-white m-0">Cookie di Profilazione / Marketing</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Richiedono consenso</p>
                  <p>
                    Questi cookie possono essere impostati tramite il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da queste aziende per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti. Non memorizzano direttamente informazioni personali, ma sono basati unicamente sull'individuazione del tuo browser e dispositivo internet.
                  </p>
                </div>
              </div>
            </section>

            {/* Gestione Browser */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Come disabilitare i cookie dal browser</h2>
              <p className="mb-4">
                Oltre allo strumento di gestione del consenso fornito su questo sito, puoi disattivare i cookie direttamente dalle impostazioni del tuo browser. Ecco i link alle guide per i browser più diffusi:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-colors">Google Chrome</a>
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-colors">Mozilla Firefox</a>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-colors">Apple Safari</a>
                <a href="https://support.microsoft.com/it-it/edge" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-colors">Microsoft Edge</a>
              </div>
            </section>

            <div className="text-xs text-gray-500 pt-10 border-t border-white/10">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
