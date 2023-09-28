import { Image, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';

function OptionsCompoents(): JSX.Element {
    useEffect(() => {

    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"60px"} height={"60px"} source={require("../../assets/icons/car.png")} alt="car" /></TouchableOpacity>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"68px"} height={"68px"} source={require("../../assets/icons/bag.png")} alt="car" /></TouchableOpacity>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"48px"} height={"48px"} source={require("../../assets/icons/mask.png")} alt="car" /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.textRow}>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Carrito</Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Compras</Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Salud</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.bottomRow}>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"68px"} height={"68px"} source={require("../../assets/icons/globe.png")} alt="car" /></TouchableOpacity>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"60px"} height={"60px"} source={require("../../assets/icons/whattsap.png")} alt="car" /></TouchableOpacity>
                    <TouchableOpacity style={styles.circle} ><Image style={{ resizeMode: 'contain' }} width={"68px"} height={"68px"} source={require("../../assets/icons/caja.png")} alt="car" /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.textRow}>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Aniversario</Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>WhatsApp</Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Envío</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    topRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    bottomRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    circle: {
        width: 90,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    viewText: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
    },
    text: {
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center'
    },
});

export default OptionsCompoents;