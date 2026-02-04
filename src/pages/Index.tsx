import { useState, useCallback } from "react";
import { ArrowRight, Clock, Eye, Heart } from "lucide-react";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuizOption } from "@/components/quiz/QuizOption";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { quizQuestions } from "@/data/quizData";

// Import images
import heroImg from "@/assets/quiz-hero.jpg";
import q1Img from "@/assets/quiz-q1.jpg";
import q2Img from "@/assets/quiz-q2.jpg";
import q3Img from "@/assets/quiz-q3.jpg";
import q4Img from "@/assets/quiz-q4.jpg";

const questionImages = [q1Img, q2Img, q3Img, q4Img];

type QuizStep = 'hero' | 'question' | 'feedback' | 'result';

const Index = () => {
  const [step, setStep] = useState<QuizStep>('hero');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalScore = scores.reduce((a, b) => a + b, 0);

  const trackEvent = useCallback((eventName: string, params?: object) => {
    // Meta Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, params);
    }
    console.log('Track:', eventName, params);
  }, []);

  const startQuiz = () => {
    trackEvent('start_quiz');
    setIsTransitioning(true);
    setTimeout(() => {
      setStep('question');
      setIsTransitioning(false);
    }, 300);
  };

  const selectAnswer = (optionIndex: number, score: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(optionIndex);
    trackEvent('answer_question', {
      question: currentQuestion + 1,
      answer: optionIndex,
      score
    });

    // Show feedback briefly
    setShowFeedback(true);
    
    setTimeout(() => {
      const newScores = [...scores, score];
      setScores(newScores);

      setIsTransitioning(true);
      
      setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
        } else {
          setStep('result');
        }
        setIsTransitioning(false);
      }, 300);
    }, 2000);
  };

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] mx-auto">
        
        {/* Hero Screen */}
        {step === 'hero' && (
          <div className={`space-y-6 ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <img 
              src={heroImg} 
              alt="Pessoa contemplando à noite"
              className="w-full aspect-[9/16] object-cover rounded-2xl"
            />
            
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-serif font-bold leading-tight">
                Sua mente não desliga?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Responda 4 perguntas rápidas e descubra o nível de sobrecarga que a ansiedade está causando — e o próximo passo mais simples pra você.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="btn-cta w-full flex items-center justify-center gap-3"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>45 segundos</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>Anônimo</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>Sem julgamento</span>
              </div>
            </div>
          </div>
        )}

        {/* Question Screen */}
        {step === 'question' && (
          <div className={`space-y-6 ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <ProgressBar current={currentQuestion + 1} total={quizQuestions.length} />
            
            <img 
              src={questionImages[currentQuestion]} 
              alt={`Pergunta ${currentQuestion + 1}`}
              className="quiz-image"
            />

            <h2 className="text-xl font-serif font-semibold leading-tight">
              {question.title}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <QuizOption
                  key={index}
                  text={option.text}
                  isSelected={selectedAnswer === index}
                  onClick={() => selectAnswer(index, option.score)}
                  index={index}
                />
              ))}
            </div>

            {/* Micro Feedback */}
            {showFeedback && (
              <div className="micro-feedback fade-in">
                <p>{question.feedback}</p>
              </div>
            )}
          </div>
        )}

        {/* Result Screen */}
        {step === 'result' && (
          <div className={isTransitioning ? 'fade-out' : 'fade-in'}>
            <ResultScreen score={totalScore} />
          </div>
        )}

      </div>
    </div>
  );
};

export default Index;
