import { Button, Image, Input, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';
import '../../config/firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();

const windowWidth = Dimensions.get('window').width;
const centeredViewWidth = windowWidth * 0.8;

function RegisterPage({ navigation }: any): JSX.Element {
    const [value, setValue] = useState({
        email: "",
        password: "",
        repassword: "",
        error: "",
    });

    function validarContrasena(contrasena: string) {
        // La expresión regular para verificar las reglas
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        // Probamos la contraseña con la expresión regular
        return regExp.test(contrasena);
    }

    async function signUp() {
        if (value.email === "" || value.password === "") return setValue({
            ...value,
            error: "El correo electrónico y la contraseña son obligatorios.",
        });
        if (!validarContrasena(value.password)) return setValue({
            ...value,
            error: "La contraseña no cumple con los requisitos de  Mínimo 8 caracteres,  Una mayúscula ,Una minúscula , Un número.",
        });
        try {
            const result = await createUserWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate('Login')
        } catch (error: any) {
            setValue({
                ...value,
                error: error.message,
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={[styles.centeredView, { width: centeredViewWidth }]}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>REGISTRARME</Text>
                        </View>
                        <View style={styles.viewContainer}>
                            <View style={{ paddingBottom: 20 }}>
                                <Input variant="underlined" value={value.email}
                                    onChangeText={(text) => setValue({ ...value, email: text })} InputLeftElement={<Image size={8} source={require("../../../assets/icons/account.png")} alt="account" />} placeholder=" Usuario" />
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Input variant="underlined" value={value.password}
                                    onChangeText={(text) => setValue({ ...value, password: text })} InputLeftElement={<Image size={8} source={require("../../../assets/icons/lock.png")} alt="lock" />} placeholder=" Contraseña" />
                            </View>
                            <View style={{ paddingBottom: 40 }}>
                                <Input variant="underlined" value={value.repassword}
                                    onChangeText={(text) => setValue({ ...value, repassword: text })} InputLeftElement={<Image size={8} source={require("../../../assets/icons/lock.png")} alt="lock" />} placeholder=" Confirmar contraseña" />
                            </View>
                            <View style={{ paddingBottom: 40 }}>
                                <Text style={{ color: 'red' }}>{value.error}</Text>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Button colorScheme="success" onPress={() => signUp()}>
                                    <Text style={styles.buttonText}>REGISTRAR</Text>
                                </Button>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Button style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.TextRegister}>Cancelar</Text>
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
        marginTop: 80
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

export default RegisterPage;