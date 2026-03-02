import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Definizione dei tipi di consenso
export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  consent: CookieConsent;
  hasInteracted: boolean; // Se l'utente ha già fatto una scelta
  isBannerOpen: boolean;
  toggleBanner: (isOpen: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookieConsent) => void;
  resetConsent: () => void;
}

const defaultConsent: CookieConsent = {
  necessary: true, // Sempre true
  analytics: false,
  marketing: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);

  // Carica le preferenze salvate al mount
  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie_consent');
    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent);
        // Verifica se il formato è corretto
        if (parsed && typeof parsed.necessary === 'boolean') {
          setConsent(parsed);
          setHasInteracted(true);
        }
      } catch (e) {
        console.error('Errore nel parsing dei cookie salvati', e);
      }
    } else {
      // Se non c'è consenso salvato, mostra il banner
      setIsBannerOpen(true);
    }
  }, []);

  // Funzione per salvare le preferenze
  const saveToStorage = (newConsent: CookieConsent) => {
    const consentData = {
      ...newConsent,
      timestamp: new Date().toISOString(),
      version: '1.0', // Utile per invalidare il consenso se cambia la policy
    };
    localStorage.setItem('cookie_consent', JSON.stringify(newConsent));
    localStorage.setItem('cookie_consent_meta', JSON.stringify(consentData));
    setConsent(newConsent);
    setHasInteracted(true);
    setIsBannerOpen(false);
    
    // Qui si potrebbe attivare/disattivare GTM o altri script in base al consenso
    // Esempio: if (newConsent.analytics) loadAnalytics();
  };

  const acceptAll = () => {
    saveToStorage({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveToStorage({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = (preferences: CookieConsent) => {
    saveToStorage({
      ...preferences,
      necessary: true, // Assicura che i necessari siano sempre true
    });
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie_consent');
    localStorage.removeItem('cookie_consent_meta');
    setConsent(defaultConsent);
    setHasInteracted(false);
    setIsBannerOpen(true);
  };

  const toggleBanner = (isOpen: boolean) => setIsBannerOpen(isOpen);

  return (
    <CookieContext.Provider
      value={{
        consent,
        hasInteracted,
        isBannerOpen,
        toggleBanner,
        acceptAll,
        rejectAll,
        savePreferences,
        resetConsent,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent deve essere usato all\'interno di un CookieProvider');
  }
  return context;
};
