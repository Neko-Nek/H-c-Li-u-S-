import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideWrapper from './components/SlideWrapper';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12 } from './slides';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];
  
  // Slide 4 and 12 have specific dark backgrounds requested in the prompt
  const isDark = currentSlide === 11; // Slide 12 is full navy

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden font-sans">
      {/* Presentation Container - 16:9 Aspect Ratio */}
      <div className="relative w-full max-w-[1920px] aspect-video max-h-screen bg-white shadow-2xl overflow-hidden">
        
        <SlideWrapper slideIndex={currentSlide} totalSlides={slides.length} isDark={isDark}>
          <CurrentSlideComponent />
        </SlideWrapper>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? 'bg-teal w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>
        </div>
      </div>
    </div>
  );
}
