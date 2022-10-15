import React, {useContext, useState} from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";

const Quest03SkillLevelScreen = ({navigation}) => {
    const {
        state,
        setLevel
    } = useContext(SwimContext);
    React.useRef(null);
    return (<>
        <View style={styles.container}>
            <Text style={styles.textBold}>Trình độ bơi của bạn đang ở cấp độ nào?</Text>
            <Text style={styles.textRegular}>Chúng tôi sẽ giúp bạn đưa ra những bài tập phù hợp với thể trạng và kinh nghiệm bơi của bạn.</Text>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setLevel(1);
            }}>
                <Text style={styles.textBold}>Mới bắt đầu</Text>
                <Text style={styles.textRegular}>Tôi mới bắt đầu tập luyện bơi lội và muốn học cách cấu trúc một bài tập bơi.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setLevel(2);
            }}>
                <Text style={styles.textBold}>Trung bình</Text>
                <Text style={styles.textRegular}>Tôi tập bơi khá thường xuyên và muốn cải thiện thêm cấp độ bài tập của mình.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={() => {
                setLevel(3);
            }}>
                <Text style={styles.textBold}>Nâng cao</Text>
                <Text style={styles.textRegular}>Tôi bơi khá tốt và sẵn sàng để tập những bài tập nâng cao hơn.</Text>
            </TouchableOpacity>

        </View>
        <NextButton nextScreen='MainFlow'
                    navigation={navigation}>
        </NextButton>
    </>)
};

/*Quest03SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}*/

const styles = StyleSheet.create({
    container      : {
        flex         : 8,
        flexDirection: 'column',
        alignItems   : 'center',
    },
    containerButton: {
        backgroundColor: 'gray',
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },

    textBold   : {
        fontSize         : 14,
        fontWeight       : 'bold',
        textAlign        : 'center',
        textAlignVertical: "center",
        marginLeft       : 80,
        marginRight      : 80,
    },
    textButton : {
        fontSize  : 20,
        fontWeight: 'bold',
    },
    textRegular: {
        fontSize   : 14,
        textAlign  : 'center',
        marginLeft : 40,
        marginRight: 40,

    },
    textLink   : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,
    },

})

export default Quest03SkillLevelScreen;
