import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constants';

import Home from '../screens/Home/Home';
import Notifications from '../screens/Home/Notifications';
import DishAdd from '../screens/Home/DishAdd';
import Settings from '../screens/Home/Settings';
import Search from '../screens/Home/Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
            <Tab.Screen name={ROUTES.SEARCH} component={Search} />
            <Tab.Screen name={ROUTES.DISHADD} component={DishAdd} />
            <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
            <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
