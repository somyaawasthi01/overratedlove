
import React, { useState, useEffect } from 'react';
import { IdeaList } from './components/IdeaList';
import { LoveLetter } from './components/LoveLetter';
import { QuickTexts } from './components/QuickTexts';
import { Counselling } from './components/Counselling';
import { ImageEditor } from './components/ImageEditor';
import { OldSchoolLove } from './components/OldSchoolLove';
import { LoveBook } from './components/LoveBook';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('isPremiumUser');
    if (stored === 'true') setIsPremium(true);
  }, []);

  const handleUnlock = () => {
    setIsPremium(true);
    localStorage.setItem('isPremiumUser', 'true');
  };

  return (
    <div className="min-h-screen bg-rose-50/50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16 px-4 text-center shadow-lg mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Heart size={48} className="fill-white" />
                </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-md">Overrated Love</h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto italic leading-relaxed">
            "Love is just a chemical reaction that ruins your sleep, drains your bank account, and defies all logic... until it becomes the only magic that makes this chaotic universe feel like home."
            </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-12">
        
        {/* Quick Actions Grid */}
        <section>
             <QuickTexts />
        </section>

        {/* Inspiration Station - Priority Feature */}
        <section>
            <IdeaList />
        </section>

        {/* Premium Book Section */}
        <section id="premium-section">
            <LoveBook isPremium={isPremium} onUnlock={handleUnlock} />
        </section>

        {/* Creative & Emotional Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="h-full">
                <LoveLetter />
            </section>
            <section className="h-full">
                <Counselling />
            </section>
        </div>

        {/* AI Features */}
        <section>
            <ImageEditor isPremium={isPremium} />
        </section>

        {/* Monogamy & Dark Humor Section */}
        <section>
            <OldSchoolLove />
        </section>

      </main>

      <footer className="bg-rose-900 text-rose-100 py-8 text-center mt-auto px-4">
        <p className="font-serif text-lg">
          Made with ❤️ by <span className="font-bold text-white">Dr. Somya Awasthi</span>
        </p>
        <div className="flex flex-col items-center gap-2 mt-2 opacity-80">
            <p className="text-sm">© {new Date().getFullYear()} Overrated Love</p>
            <a 
                href="https://instagram.com/somya__awasthi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-white hover:underline transition-all flex items-center gap-1"
            >
                Queries? DM on Instagram: @somya__awasthi
            </a>
        </div>
        <p className="text-xs mt-4 opacity-50 italic">if this website works i'll make one for heartbreaks too, JK</p>
      </footer>
    </div>
  );
};

export default App;
