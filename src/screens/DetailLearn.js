import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import LearnVideo from '../components/LearnVideo';

const DetailLearn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ width: '100%', height: 329 }}>
            <Image
              style={{ width: '100%', height: 280 }}
              source={require('../../assets/storage/imgs/img1.png')}
            />
            <Text
              style={{
                marginTop: 12,
                marginLeft: 20,
                fontSize: 18,
                fontWeight: '700',
                color: '#145BB6',
                lineHeight: 21,
              }}
            >
              KỸ THUẬT TAY
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
              marginTop: 19,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="heart-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#989898',
                    marginBottom: 4,
                  }}
                >
                  Level
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 16,
                    color: '#145BB6',
                  }}
                >
                  Beginner
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="time-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#989898',
                  }}
                >
                  Time
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="share-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#989898',
                    marginBottom: 4,
                  }}
                >
                  Số bài tập
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 16,
                    color: '#145BB6',
                  }}
                >
                  3 videos
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 28 }}>
            <LearnVideo />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailLearn;
