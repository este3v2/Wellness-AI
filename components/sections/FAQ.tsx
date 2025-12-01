import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-stone-800 pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-teal-600" /> : <ChevronDown className="text-stone-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-stone-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "I’m not technical – will I have to 'manage' the AI?",
      answer: "Not at all. I set up the entire system for you. You get a simple dashboard where you might drag-and-drop a file or click a button. I also provide clear video SOPs for you or your assistant."
    },
    {
      question: "Is my client data safe?",
      answer: "Yes. We prioritize privacy. We can set up workflows that anonymize data before processing, or we can focus strictly on public-facing content (like blogs and social) so no sensitive client info ever touches the AI."
    },
    {
      question: "What if I don't like the tone of the content?",
      answer: "That's exactly what Week 2 is for. We iterate on the 'system instructions' until it sounds like you. It learns your vocabulary, sentence structure, and warmth."
    },
    {
      question: "Which tools will we use?",
      answer: "It depends on your current stack, but typically we use a combination of simple automation tools (like Make or Zapier) and a clean interface (like Airtable or Notion). You won't need to learn to code."
    },
    {
      question: "How much time will I need to invest?",
      answer: "About 90 minutes in Week 1 for the deep dive, and about 1 hour in Week 2 for review. After that, it should save you 5-10 hours a week."
    }
  ];

  return (
    <Section bg="white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-900">Common Questions</h2>
        <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </Section>
  );
};