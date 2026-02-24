import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type NicheType = 'fashion' | 'restaurant' | 'salon' | 'fitness' | 'adult';
export type EngineType = 'A' | 'B';

interface NicheContextType {
  niche: NicheType;
  engine: EngineType;
  setNiche: (n: NicheType) => void;
  setEngine: (e: EngineType) => void;
  nicheLabel: string;
}

const labels: Record<NicheType, string> = {
  fashion: 'FASHION', restaurant: 'RESTAURANT', salon: 'SALON', fitness: 'FITNESS', adult: 'CREATOR+'
};

const NicheContext = createContext<NicheContextType | null>(null);

export const NicheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [niche, setNicheState] = useState<NicheType>('fashion');
  const [engine, setEngine] = useState<EngineType>('A');

  const setNiche = useCallback((n: NicheType) => {
    setNicheState(n);
    if (n === 'adult') setEngine('B');
    else setEngine('A');
  }, []);

  useEffect(() => {
    document.body.className = document.body.className.replace(/niche-\w+/g, '');
    document.body.classList.add(`niche-${niche}`);
  }, [niche]);

  return (
    <NicheContext.Provider value={{ niche, engine, setNiche, setEngine, nicheLabel: labels[niche] }}>
      {children}
    </NicheContext.Provider>
  );
};

export const useNiche = () => {
  const ctx = useContext(NicheContext);
  if (!ctx) throw new Error('useNiche must be used within NicheProvider');
  return ctx;
};
