import React from "react";

interface GifListProps {
  text: string;
}

export const GifList: React.FC<GifListProps> = ({ text }) => {
  return <div className="list-container">I am a list</div>;
};
