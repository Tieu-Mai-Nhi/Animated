import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import styles from "./style";

const Task = (props) => {

    const { number } = props;
    const numberText = number < 10 ? `0${number}` : number;
    const itemBg = number % 2 === 0 ? styles.even : styles.odd;
    return (
        <View style={styles.item}>
            <View style={[styles.square, itemBg]}>
                {/* css nhiều cho vào 1 mảng */}
                <Text style={styles.number}>{numberText}</Text>
            </View>
            <Text style={styles.content}>{props.title}</Text>
            <Pressable
                style={styles.button}
                onPress={props.onDeleteTask}>
                <Text style={{ fontSize: 20, color: 'white' }}>x</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={props.onEdit}>
                <Text>Sửa</Text>
            </Pressable>
        </View>
    );
};

export default Task;




// render bình thường, truyền dữ liệu từ cha xuống con (qua props)???
// làm bằng redux tool-kit, sử dụng dữ liệu, state ở kho chung, gọi state = selector