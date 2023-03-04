import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, ROUTES } from '../constants';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Home from '../screens/Home/Home';
import BottomTabNavigator from './BottomTabNavigator';
// import { Login, Register, ForgotPassword } from '../screens';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.white,
            }}
            initialRouteName={ROUTES.LOGIN}
        >
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen
                name={ROUTES.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={({ route }) => ({
                    title: route.params.userID,
                })}
            />
            <Stack.Screen
                name={ROUTES.HOME}
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
