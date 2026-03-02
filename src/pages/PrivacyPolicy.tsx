import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Mail, Server, UserCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      <SEO 
        title="Privacy Policy" 
        description="Informativa sulla privacy di Gaia Circle Lab. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."
        canonical="/privacy-policy"
      />
      <Header />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12 text-gray-300 leading-relaxed">
            
            {/* Introduzione */}
            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white m-0">1. Titolare del Trattamento</h2>
              </div>
              <p>
                Il Titolare del trattamento dei dati personali è <strong>GAIA di Elisa Chittaro</strong> (in seguito "Gaia Circle Lab"), con sede in Moruzzo (UD), Italia, P.IVA 03135250300.
                <br />
                Per qualsiasi richiesta relativa alla privacy, puoi contattarci all'indirizzo email: <a href="mailto:info@gaiacirclelab.com" className="text-cyan-400 hover:underline">info@gaiacirclelab.com</a> oppure utilizzare il <Link to="/contatti" className="text-cyan-400 hover:underline">modulo di contatto</Link> dedicato.
              </p>
            </section>

            {/* Dati Raccolti */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white m-0">2. Quali Dati Raccogliamo</h2>
              </div>
              <ul className="list-disc pl-6 space-y-3 marker:text-cyan-500">
                <li>
                  <strong className="text-white">Dati di Navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, orari di accesso).
                </li>
                <li>
                  <strong className="text-white">Dati forniti volontariamente:</strong> L'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto o tramite i moduli presenti sul sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.
                </li>
                <li>
                  <strong className="text-white">Cookie:</strong> Per i dettagli sui cookie, consulta la nostra <Link to="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</Link>.
                </li>
              </ul>
            </section>

            {/* Finalità */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Server className="w-8 h-8 text-pink-400" />
                <h2 className="text-2xl font-bold text-white m-0">3. Finalità e Base Giuridica</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">Erogazione del Servizio</h3>
                  <p className="text-sm">Per rispondere alle tue richieste e fornire i servizi offerti dal sito. <br /><span className="text-gray-400 italic">Base giuridica: Esecuzione di misure precontrattuali o contrattuali.</span></p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">Sicurezza e Manutenzione</h3>
                  <p className="text-sm">Per garantire la sicurezza del sito e prevenire frodi. <br /><span className="text-gray-400 italic">Base giuridica: Legittimo interesse del Titolare.</span></p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">Analisi Statistica</h3>
                  <p className="text-sm">Per analizzare l'uso del sito in forma aggregata e anonima. <br /><span className="text-gray-400 italic">Base giuridica: Consenso dell'utente (tramite Cookie Banner).</span></p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">Marketing</h3>
                  <p className="text-sm">Solo previo consenso esplicito, per inviarti comunicazioni promozionali. <br /><span className="text-gray-400 italic">Base giuridica: Consenso dell'utente.</span></p>
                </div>
              </div>
            </section>

            {/* Destinatari */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <UserCheck className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-bold text-white m-0">4. Destinatari dei Dati</h2>
              </div>
              <p>I tuoi dati potranno essere condivisi con:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-green-500">
                <li>Soggetti che agiscono tipicamente in qualità di responsabili del trattamento (es. provider di hosting, fornitori di servizi IT).</li>
                <li>Soggetti, enti o autorità a cui sia obbligatorio comunicare i tuoi dati personali in forza di disposizioni di legge o di ordini delle autorità.</li>
              </ul>
              <p className="mt-4">I dati non saranno diffusi né trasferiti al di fuori dello Spazio Economico Europeo senza le adeguate garanzie previste dal GDPR.</p>
            </section>

            {/* Conservazione */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white m-0">5. Conservazione dei Dati</h2>
              </div>
              <p>
                I dati personali trattati per le finalità di navigazione sono conservati per il tempo strettamente necessario a raggiungere tali scopi. I dati trattati per rispondere alle richieste sono conservati per il tempo necessario a fornire riscontro.
                In ogni caso, i dati saranno conservati nel rispetto dei termini di prescrizione previsti dalla legge.
              </p>
            </section>

            {/* Diritti */}
            <section className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white m-0">6. I Tuoi Diritti GDPR</h2>
              </div>
              <p className="mb-4">In qualità di interessato, hai il diritto di:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Chiedere l'accesso ai tuoi dati personali</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Chiedere la rettifica o la cancellazione degli stessi</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Opporti al trattamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Chiedere la limitazione del trattamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Ricevere i dati in un formato strutturato (portabilità)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <span>Revocare il consenso in qualsiasi momento</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Per esercitare i tuoi diritti, puoi scriverci a: <a href="mailto:info@gaiacirclelab.com" className="text-white hover:underline">info@gaiacirclelab.com</a>.
                Hai inoltre il diritto di proporre reclamo all'autorità di controllo (Garante Privacy).
              </p>
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

export default PrivacyPolicy;
