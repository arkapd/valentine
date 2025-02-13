import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { BrownPanda } from './components/BrownPanda';
import { WhitePanda } from './components/WhitePanda';
import { PandasTogether } from './components/PandasTogether';

function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(true);

  const handleAnswer = (answer: 'yes' | 'no') => {
    setResponse(answer === 'yes' ? 'Baby I love you! 💖' : "I'll take that as a yes! 🥰");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center overflow-hidden relative">
      {/* Hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Girl Panda (stationary) */}
        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-24 md:w-32">
            <WhitePanda />
          </div>
        </div>

        {/* Boy Panda (running animation) with rose */}
        <div
          className={`relative ${
            isRunning ? 'animate-run' : 'left-[60%]'
          } transition-all duration-1000`}
          onAnimationEnd={() => {
            setIsRunning(false);
            setTimeout(() => setShowProposal(true), 500);
          }}
        >
          <div className="relative w-24 md:w-32">
            <BrownPanda />
            <span className="absolute bottom-0 right-0 text-2xl animate-bounce">🌹</span>
          </div>
        </div>

        {/* Proposal Modal */}
        {showProposal && !response && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl transform scale-100 animate-pop max-w-sm w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center">
                Will you be my Valentine?
              </h2>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleAnswer('yes')}
                  className="px-6 md:px-8 py-2 md:py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer('no')}
                  className="px-6 md:px-8 py-2 md:py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transform hover:scale-105 transition"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Response Modal */}
        {response && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl transform scale-100 animate-pop text-center max-w-sm w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">{response}</h2>
              <div className="flex justify-center">
                <div className="w-36 md:w-48">
                  <PandasTogether />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;