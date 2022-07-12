import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LandingScreen, LoginScreen} from '../Screen';
import {Startnow} from '../Screen/Landing/startnow';

const RootRouter = createAppContainer(
  createStackNavigator(
    {
      LandingScreen,
      LoginScreen,
      Startnow,
    },
    {
      initialRouteName: 'Startnow',
      headerMode: 'none',
    },
  ),
);

export {RootRouter};
