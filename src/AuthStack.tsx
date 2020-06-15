import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { Text, Button } from 'react-native'
import { Center } from "./Center"
import { AuthNavProps, AuthParamList } from './AuthParamList'
import { AuthContext } from './AuthProvider';

interface AuthStackProps { }

const Stack = createStackNavigator<AuthParamList>()

function Login({
    navigation,
    route
}: AuthNavProps<'Login'>) {

    const { login } = useContext(AuthContext)

    return (
        <Center>
            <Text>I am a {route.name} Screen</Text>
            <Button
                title="Log me in"
                onPress={() => {
                    login()
                }} />
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

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
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
    );
};
