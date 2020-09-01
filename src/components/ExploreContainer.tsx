import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name?: string;
  descriptionArr?: string[];
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, descriptionArr }) => {
  return (
    <div className="container">
      {Boolean(name) && <strong>{name}</strong>}
      {Boolean(descriptionArr) && (
        (descriptionArr as string[]).map(el => (
          <div key={el} className="container__text">{el}</div>
        )
      ))}
    </div>
  );
};

export default ExploreContainer;
