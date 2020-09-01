import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonThumbnail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

type Props = {
  image: string;
  title: string;
  header: string;
  titlePage: string;
  descriptionArr: string[];
}

const Tab: React.FC<Props> = ({image, title, header, titlePage, descriptionArr}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{titlePage}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{header}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{padding: '0 10px'}}>
          <ExploreContainer
            name={title}
          />
          <img src={image} />
          <ExploreContainer
            descriptionArr={descriptionArr}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab;
