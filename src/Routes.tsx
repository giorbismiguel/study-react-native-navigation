import React from 'react'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { View, Text, Button } from 'react-native'
import { Center } from "./Center"
import { AuthParamList, AuthNavProps } from './AuthParamList'

interface RoutesProps { }

const Stack = createStackNavigator()

function Login({
    navigation,
    route
}: AuthNavProps<'Login'>) {
    return (
        <Center>
            <Text>I am a {route.name} Screen</Text>
            <Button
                title="go to register"
                onPress={() => {
                    navigation.navigate('Register')
                }} />
        </Center>
    );
}

function Register({
    navigation,
    route
}: AuthNavProps<'Register'>) {
    return (
        <Center>
            <Text>I am a :{route.name} Screen</Text>
            <Button
                title="go to login"
                onPress={() => {
                    navigation.navigate('Login')
                }} />
        </Center>
    );
}

export const Routes: React.FC<RoutesProps> = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}
                initialRouteName="Login">

                <Stack.Screen
                    options={{
                        headerTitle: "Sign In"
                    }}
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    options={{
                        headerTitle: "Sign Up"
                    }}
                    name="Register"
                    component={Register}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
