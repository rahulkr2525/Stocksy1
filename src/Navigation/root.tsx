import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LandingScreen, LoginScreen} from '../Screen';
import {Startnow} from '../Screen/Landing/startnow';
import {RegisterScreen} from '../Screen/Landing/register';

const RootRouter = createAppContainer(
  createStackNavigator(
    {
      LandingScreen,
      LoginScreen,
      Startnow,
      RegisterScreen,
    },
    {
      initialRouteName: 'Startnow',
      headerMode: 'none',
    },
  ),
);

export {RootRouter};
