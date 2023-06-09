import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/loginPage';
import ForgotPasswordPage from '../pages/forgotPasswordPage';
import SignupPage from '../pages/signupPage';
import BruneiShopPage from '../pages/bruneiShopPage';
import HomePage from '../pages/homePage';
import HealthPage from '../pages/HealthPage';
import ChoicePage from '../pages/ChoicePage';
import CambodiaShopPage from '../pages/cambodiaShopPage';
import Shop from '../components/shop';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
                <Stack.Screen name="Signup" component={SignupPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Choice" component={ChoicePage} />
                <Stack.Screen name="Health Guidelines" component={HealthPage} />
                <Stack.Screen name="Shop" component={Shop} />
                <Stack.Screen name="shop_Brunei" component={BruneiShopPage} />
                <Stack.Screen name="shop_Cambodia" component={CambodiaShopPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;