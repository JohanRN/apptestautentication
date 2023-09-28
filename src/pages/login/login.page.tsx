import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Image, Button } from "native-base";
import '../../config/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const centeredViewWidth = windowWidth * 0.8;

function LoginPage({ navigation }: any): JSX.Element {
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
    });
    async function signIn() {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: "El correo electrónico y la contraseña son obligatorios.",
            });
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate('Home')
        } catch (error: any) {
            console.log(error);
            setValue({
                ...value,
                error: 'Usuario o contraseña incorrecto',
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={[styles.centeredView, { width: centeredViewWidth }]}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>INICIAR SESIÓN</Text>
                        </View>
                        <View style={styles.viewContainer}>
                            <View style={{ paddingBottom: 20 }}>
                                <Input variant="underlined" value={value.email}
                                    onChangeText={(text) => setValue({ ...value, email: text })} InputLeftElement={<Image size={8} source={require("../../../assets/icons/account.png")} alt="account" />} placeholder=" Usuario" />
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Input type='password' variant="underlined" value={value.password}
                                    onChangeText={(text) => setValue({ ...value, password: text })} InputLeftElement={<Image size={8} source={require("../../../assets/icons/lock.png")} alt="lock" />} placeholder=" Contraseña" />
                            </View>
                            <View style={{ paddingBottom: 40 }}>
                                <Text style={{ color: 'red' }}>{value.error}</Text>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Button colorScheme="success" onPress={() => signIn()}><Text style={styles.buttonText}>INGRESAR</Text></Button>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Button style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                                    <Text style={styles.TextRegister}>Registrarme</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
    },
    centeredView: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        marginTop: (windowHeight * 0.45) / 2
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#29367C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        lineHeight: 29.05,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
    },
    viewContainer: {
        padding: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 29.05,
        fontWeight: '700',
        fontFamily: 'Inter-Regular',
    },
    buttonRegister: {
        backgroundColor: 'white',
    },
    TextRegister: {
        color: '#1469BE',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Inter-Regular',
        borderBottomWidth: 2,
        borderBottomColor: '#1469BE'
    },

});

export default LoginPage;