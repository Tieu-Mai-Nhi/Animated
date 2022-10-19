import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Bell = ({ navigation }) => {
    const topMotion = useRef(new Animated.Value(0)).current;  //0: giá trị marginTop ban đầu
    const spinValue = useRef(new Animated.Value(0)).current; //0: giá trị góc ban đầu
    const scale = useRef(new Animated.Value(1)).current; //
    const colorValue = useRef(new Animated.Value(0)).current; //

    const motion = useRef(new Animated.Value(-100)).current; //-100: tọa độ ban đầu phía dưới

    // loading
    // const leftMotion = useRef(new Animated.Value(0)).current;
    const loadingValue = useRef(new Animated.Value(0)).current;
    const [count, setCount] = useState(0);
    const countInterval = useRef(null);

    const zoomIn = () => {

    }

    useEffect(() => {
        countInterval.current = setInterval(() => {
            setCount(count => count + 5);
        }, 1000);
        return clearInterval(countInterval);
    }, []);             // tạo biến countInterval để lấy giá trị % hiện tại và set + 5 sau mõi giây

    const load = (count) => {
        Animated.timing(
            loadingValue,
            {
                toValue: count,
                duration: 500,
                useNativeDriver: false,
                easing: Easing.linear,
            }
        ).start()
    }

    useEffect(() => {
        load(count);
        if (count > 100) {
            setCount(0);
            clearInterval(countInterval)              // gọi hàm animation --> toValue (%hiện tại) --> hàm Interval chạy đến khi count = 100 thì dừng
        }
    }, [count]);

    const widthLoading = loadingValue.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });


    //-----------------------------------------------------------------------//
    // Bell
    useEffect(() => {
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
        ).start();
    }, [])


    // nội suy
    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-45deg', '0deg', '45deg']
    })


    return (
        <View style={{ alignItems: 'center', flex: 1, borderWidth: 4, borderColor: 'orange' }}>
            <Animated.View style={{ transform: [{ rotate: spin }, { scale: scale }], alignItems: 'center', justifyContent: 'center', width: 60, height: 60 }}>
                <Image
                    source={{ uri: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-bell-christmas-tulpahn-outline-color-tulpahn.png' }}
                    style={{ width: 40, height: 40 }}
                    resizeMode='stretch'
                />
            </Animated.View>
            <Animated.View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 60 }}>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 8 }}
                        onPress={() => Animated.timing(spinValue).stop()}
                    >
                        <FontAwesome5 name="stop" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 8 }}
                        onPress={() => Animated.timing(spinValue).start()}
                    >
                        <FontAwesome5 name="play" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={{
                height: 40, width: '100%', backgroundColor: 'deeppink', borderWidth: 2, borderRadius: 5
            }}>
                {/* <FontAwesome name="soccer-ball-o" size={24} color="black" /> */}
                <Animated.View style={[
                    StyleSheet.absoluteFill,
                    {
                        backgroundColor: "#8BED4F",
                        width: widthLoading,
                        height: 36,
                    }
                ]}>
                </Animated.View>
            </Animated.View>
            <Text style={{}}>Loading... {count}%</Text>
            <Pressable onPress={zoomIn}>
                <Feather name="zoom-in" size={40} color="black" />
            </Pressable>
        </View >
    )
}

export default Bell

const styles = StyleSheet.create({

})