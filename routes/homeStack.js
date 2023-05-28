import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/loginPage';
import ForgotPasswordPage from '../pages/forgotPasswordPage';
import SignupPage from '../pages/signupPage';
import ShopPage from '../pages/shopPage';
import HomePage from '../pages/homePage';
import HealthPage from '../pages/HealthPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
                <Stack.Screen name="Signup" component={SignupPage} />
                <Stack.Screen name="Shop" component={ShopPage} />
                <Stack.Screen name="Country" component={HomePage} />
                <Stack.Screen name="Health" component={HealthPage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;