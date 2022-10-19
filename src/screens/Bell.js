import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Bell = ({ navigation }) => {
    const topMotion = useRef(new Animated.Value(0)).current;  //0: giá trị marginTop ban đầu
    const spinValue = useRef(new Animated.Value(0)).current; //0: giá trị góc ban đầu
    const scale = useRef(new Animated.Value(1)).current; //
    const colorValue = useRef(new Animated.Value(0)).current; //

    const motion = useRef(new Animated.Value(-100)).current; //-100: tọa độ ban đầu phía dưới

    // loading
    const leftMotion = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.timing(
                    leftMotion,
                    {
                        toValue: Dimensions.get('window').width,
                        duration: 2000,
                        useNativeDriver: false,
                        easing: Easing.linear,
                    }
                )
            ).start()

            Animated.loop(  // lặp lại liên tục
                Animated.parallel([ // phát đồng thời các animation, song song
                    Animated.timing(
                        motion,
                        {
                            toValue: 200,
                            duration: 2000,
                            useNativeDriver: false
                        },
                    ),


                    Animated.timing(
                        scale,
                        {
                            toValue: 1.5,
                            duration: 2000,
                            useNativeDriver: true,
                        }
                    ),

                    Animated.sequence([   // xảy ra liên tiếp 
                        // 1. lắc qua bên phải 45 độ
                        Animated.timing(
                            spinValue,
                            {
                                toValue: 1,
                                duration: 200,
                                useNativeDriver: true
                            }
                        ),
                        // 2. lắc qua bên trái 90 độ
                        Animated.timing(
                            spinValue,
                            {
                                toValue: -1,
                                duration: 400,
                                useNativeDriver: true
                            }
                        ),
                        // 3. lắc qua bên phải 45 độ
                        Animated.timing(
                            spinValue,
                            {
                                toValue: 0,
                                duration: 200,
                                useNativeDriver: true
                            }
                        ),
                    ]),




                ])
            )
                .start();
        }, 1000);
    }, [])


    // nội suy
    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-45deg', '0deg', '45deg']
    })

    const ballSpin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-180deg', '0deg', '180deg']
    })


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, borderWidth: 4, borderColor: 'orange' }}>
            <Animated.View style={{ transform: [{ rotate: spin }, { scale: scale }], alignItems: 'center', justifyContent: 'center', width: 60, height: 60 }}>
                <Image
                    source={{ uri: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-bell-christmas-tulpahn-outline-color-tulpahn.png' }}
                    style={{ width: 40, height: 40 }}
                    resizeMode='stretch'
                />
            </Animated.View>
            {/* <Animated.View style={{ position: 'absolute', bottom: motion, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ borderRadius: 20, backgroundColor: 'blue', width: 300, height: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => navigation.navigate('Home')}
                // () => Animated.timing(spinValue).stop()
                >
                    <Text>Stop</Text>
                </TouchableOpacity>
            </Animated.View> */}
            <Animated.View style={{ height: 40, width: '100%', backgroundColor: 'deeppink', position: 'relative', top: -200, justifyContent: 'center' }}>
                <Animated.View style={{ transform: [{ translateX: leftMotion }] }}>
                    {/* transform: [{rotate: ballSpin }] */}
                    <FontAwesome name="soccer-ball-o" size={24} color="black" />
                </Animated.View>
            </Animated.View>
        </View >
    )
}

export default Bell

const styles = StyleSheet.create({})