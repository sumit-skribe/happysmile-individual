import * as React from "react";

export interface CardProps {
  src: string;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ src, heading, paragraph }) => (
  <div className="flex flex-col gap-8">
    <img src={src} width={380} height={217} />
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl leading-10 font-bold">{heading}</h2>
      <p className="text-lg leading-7 font-normal">{paragraph}</p>
    </div>
  </div>
);

export interface MissionVisionProps {
  cards: CardProps[];
}

export const MissionVision: React.FC<MissionVisionProps> = ({ cards }) => {
  return (
    <div className="bg-secondary-02 font-inter py-12 text-color ">
      <div className="web-mx grid grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
