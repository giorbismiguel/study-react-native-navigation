import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { Center } from "./Center"
import { AuthContext } from './AuthProvider'
import { AppTabs } from './AppTabs'
import { AuthStack } from './AuthStack'

interface RoutesProps { }



export const Routes: React.FC<RoutesProps> = ({ }) => {

    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user is logged in or not
        AsyncStorage.getItem("user")
            .then(userString => {
                if (userString) {
                    login()
                }

                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        <Center>
            <ActivityIndicator size="large" />
        </Center>
    }

    return (
        <NavigationContainer>
            {user ? (<AppTabs />) : (<AuthStack />)}
        </NavigationContainer>
    );
}
