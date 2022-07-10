import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LandingScreen, LoginScreen } from '../Screen';

const RootRouter = createAppContainer(
  createStackNavigator(
    {
      LandingScreen,
      LoginScreen
    },
    {
      initialRouteName: 'LandingScreen',
      headerMode: 'none',
    }
  )
);

export  { RootRouter };