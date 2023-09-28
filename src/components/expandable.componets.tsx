import { Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions, LogBox, TouchableOpacity } from 'react-native';


function Expandable({ type, open, fnOpen }: any): JSX.Element {
    const [layoutHeight, setlayoutHeight] = useState<number | null>(0);


    useEffect(() => {
        setlayoutHeight(open ? null : 0);
    }, [open]);
    return (
        <View>
            <TouchableOpacity style={type == 1 ? styles.item1 : styles.item2} onPress={() => fnOpen()}>
                <Text style={styles.itemtext}>
                    Descubre {type == 1 ? "1" : "2"}
                </Text>
                {open ? (
                    <Image source={require("../../assets/icons/down.png")} style={styles.image} alt='..' />
                ) : (
                    <Image source={require("../../assets/icons/up.png")} style={styles.image} alt='..' />
                )}

            </TouchableOpacity>
            <View style={[
                type === 1 ? styles.view1 : styles.view2,
                {
                    height: layoutHeight,
                },
            ]}>
                <View style={styles.content}>
                    <Text style={styles.text}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</Text>
                    <View style={styles.separator} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item1: {
        backgroundColor: '#9FCBF6',
        flexDirection: 'row',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        height: 80
    },
    item2: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        height: 80
    },
    view1: {
        backgroundColor: '#9FCBF6',
        overflow: 'hidden'
    },
    view2: {
        backgroundColor: '#FAFAFA',
        overflow: 'hidden'
    },
    itemtext: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black'
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        padding: 15,
        fontSize: 13,
        fontWeight: '700',
        textAlign: 'justify',
        color: 'black'
    },
    separator: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    }
});

export default Expandable;