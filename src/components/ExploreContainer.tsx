import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name?: string;
  descriptionArr?: {title?: string; texts: string[]}[];
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, descriptionArr }) => {
  return (
    <div className="container">
      {Boolean(name) && <strong>{name}</strong>}
      {Boolean(descriptionArr) && (
        (descriptionArr as {title?: string; texts: string[]}[]).map(el => (
          <div key={el.title} className="container__text">
            {Boolean(el.title) && <div className="container__title">{el.title}</div>}
            {Boolean(el.texts) && (
              el.texts.map(text => (
                <div key={text} className="container__subtext">{text}</div>
              ))
            )}
          </div>
        )
      ))}
    </div>
  );
};

export default ExploreContainer;
