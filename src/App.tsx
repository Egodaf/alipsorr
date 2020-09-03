import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab from './pages/Tab1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {routes} from './data'

// TODO: add real data

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {routes.map(route => (
            <Route
              key={route.key}
              path={route.href}
              component={(...args: any[]) => (
                <Tab {...args}
                  image={route.image}
                  title={route.title}
                  header={String(route.label)}
                  descriptionArr={route.descriptionArr}
                />
              )}
              exact={true}
            />
          ))}
          <Route path="/" render={() => <Redirect to={routes[0].href} />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {routes.map(el => (
            <IonTabButton tab={el.tab} href={el.href} key={el.key}>
              <IonIcon icon={el.icon} />
              <IonLabel>{el.label}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
