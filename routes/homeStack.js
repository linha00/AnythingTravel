import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/loginPage';
import ForgotPasswordPage from '../pages/forgotPasswordPage';
import SignupPage from '../pages/signupPage';
import ShopPage from '../pages/shopPage';
import ResetPassword from '../pages/resetPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Signup" component={SignupPage} />
                <Stack.Screen name="Shop" component={ShopPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;