import { cn } from "@/lib/utils";

interface QuizOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export const QuizOption = ({ text, isSelected, onClick, index }: QuizOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "quiz-option",
        isSelected && "quiz-option-selected"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-base leading-relaxed">{text}</span>
    </button>
  );
};
