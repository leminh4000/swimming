import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    FlatList,
    Image,
    Button
} from 'react-native';
import {Video} from "expo-av";

const ResultsDetail = ({ result }) => {
    const video = React.useRef(null);
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: result.url,
                }}
                onPress={
                    ()=>{
                        video?.current?.presentFullscreenPlayer();
                    }
                }
                useNativeControls={false}
                resizeMode="contain"
                isLooping
                // playableDurationMillis={result.playableDurationMillis}
                // onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Text style={styles.text}>{result.name}</Text>
            <Button
                title='Play'
                onPress={() => {
                    console.log(result.url);
                    video?.current?.presentFullscreenPlayer();
                }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       marginLeft:10,
    },
    image:{
      width: 250,
      height: 120,
      borderRadius:4,
    },
    video: {
        width: 100,
        height: 100,
    },
    text :{
        fontSize: 16,
        weight: 'bold',
        color: 'purple',
    }
});

export default ResultsDetail;
