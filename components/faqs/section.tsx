"use client";
import * as React from "react";
import { useState } from "react";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import CollapsibleItem from "./collapsible-item";

interface SectionProps {
  faqs: FAQItemProps[];
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-color">
      <div
        className="py-3 px-6 flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg leading-7 font-semibold">{question}</p>
        {isOpen ? (
          <PiMinusBold className="text-sm font-bold" />
        ) : (
          <PiPlusBold className="text-sm font-bold" />
        )}
      </div>
      <CollapsibleItem isOpen={isOpen} content={answer} />
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({ faqs }) => {
  return (
    <div className="bg-card text-color web-mx font-inter grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
      <div className="flex flex-col gap-2 justify-center">
        <div className="text-5xl leading-none font-semibold">
          Frequently <span className="text-accent">Asked Questions</span>
        </div>
        <div className="text-2xl leading-8 font-normal">
          Get quick answers to your dental questions here!
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
