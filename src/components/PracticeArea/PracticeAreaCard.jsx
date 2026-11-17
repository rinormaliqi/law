// components/PracticeAreaCard.js
import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const PracticeAreaCard = ({
  areaName,
  description,
  fullDescription,
  icon,
  learnMoreText,
  showLessText = "Show less",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className="card card-hover group relative flex h-full flex-col overflow-hidden p-6 md:p-7">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
          {icon}
        </div>
        <h3 className="text-lg font-bold leading-snug md:text-xl">{areaName}</h3>
      </div>

      <p className="leading-relaxed text-gray-600">{description}</p>

      <AnimatePresence initial={false}>
        {isExpanded && fullDescription && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-700">
              {fullDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {fullDescription && (
        <button
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          className="link-arrow mt-auto self-start pt-5"
        >
          {isExpanded ? showLessText : learnMoreText}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}

      <span
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </div>
  );
};
