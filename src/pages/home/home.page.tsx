import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions, LogBox } from 'react-native';
import OptionsCompoents from '../../components/options.components';
import Expandable from '../../components/expandable.componets';


function HomePage(): JSX.Element {
    const [multipleSelection, setmultipleSelection] = useState(true);
    const [data, setData] = useState([]);
    const [condition1, setcondition1] = useState(false);
    const [condition2, setcondition2] = useState(false);

    const openExpandable = (type: any) => {
        if (type == 1) {
            setcondition1(!condition1)
        } else {
            setcondition2(!condition2)
        }
    };
    useEffect(() => {

    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.TextHeaders}>Opciones</Text>
                    <OptionsCompoents />
                </View>
                <View>
                    <View>
                        <Expandable type={1} open={condition1} fnOpen={() => openExpandable(1)} />
                    </View>
                    <View style={{ paddingTop: 10, }}>
                        <Expandable type={0} open={condition2} fnOpen={() => openExpandable(0)} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        paddingVertical: 22,
        paddingHorizontal: 22,
        paddingBottom: 50
    },
    TextHeaders: {
        fontSize: 18,
        fontWeight: "400",
        color: '#000000'
    },

});

export default HomePage;