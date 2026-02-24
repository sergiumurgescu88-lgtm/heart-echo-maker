import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import CharacterModal from '@/components/CharacterModal';
import DashboardPage from '@/components/pages/DashboardPage';
import ChameleonPage from '@/components/pages/ChameleonPage';
import MomentumPage from '@/components/pages/MomentumPage';
import TwinPlatformPage from '@/components/pages/TwinPlatformPage';
import PredictivePage from '@/components/pages/PredictivePage';
import CharactersPage from '@/components/pages/CharactersPage';
import GenerationPage from '@/components/pages/GenerationPage';
import CloneDancePage from '@/components/pages/CloneDancePage';
import MarketplacePage from '@/components/pages/MarketplacePage';
import StorefrontsPage from '@/components/pages/StorefrontsPage';
import LibraryPage from '@/components/pages/LibraryPage';
import AnalyticsPage from '@/components/pages/AnalyticsPage';
import { NicheProvider } from '@/contexts/NicheContext';
import { toast } from 'sonner';

const IndexInner: React.FC = () => {
  const [page, setPage] = useState('dashboard');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      toast('⚡ Momentum Alert — Fashion!', { description: 'Terracotta trend +340% · AI draft ready in Studio' });
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <DashboardPage onNavigate={setPage} onOpenModal={() => setModalOpen(true)} />;
      case 'chameleon': return <ChameleonPage />;
      case 'momentum': return <MomentumPage />;
      case 'twin': return <TwinPlatformPage />;
      case 'predict': return <PredictivePage />;
      case 'characters': return <CharactersPage onOpenModal={() => setModalOpen(true)} />;
      case 'generation': return <GenerationPage />;
      case 'clone': return <CloneDancePage />;
      case 'marketplace': return <MarketplacePage />;
      case 'storefronts': return <StorefrontsPage />;
      case 'library': return <LibraryPage />;
      case 'analytics': return <AnalyticsPage />;
      default: return <DashboardPage onNavigate={setPage} onOpenModal={() => setModalOpen(true)} />;
    }
  };

  return (
    <>
      {/* Ambient orbs */}
      <div className="fixed -top-[150px] -left-[100px] w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none z-0 opacity-70 bg-[radial-gradient(circle,hsl(var(--niche-glow)),transparent_70%)]" />
      <div className="fixed -bottom-[100px] -right-[100px] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none z-0 bg-[radial-gradient(circle,rgba(122,58,138,0.08),transparent_70%)]" />

      <Sidebar activePage={page} onNavigate={setPage} />
      <main className="ml-[248px] min-h-screen p-9 relative z-[1]">
        {renderPage()}
      </main>
      <CharacterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

const Index: React.FC = () => (
  <NicheProvider>
    <IndexInner />
  </NicheProvider>
);

export default Index;
