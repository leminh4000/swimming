import React, { useContext } from 'react';
import { Context as ArchivementContext } from '../context/ArchivementContext';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ArchivementTable from '../components/ArchivementTable';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';

const PerformanceScreen = ({ navigation }) => {
  const { state, fetchArchivements } = useContext(ArchivementContext);
  const learn = [
    {
      id: 1,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../../assets/storage/imgs/img1.png'),
    },
    {
      id: 2,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../../assets/storage/imgs/img1.png'),
    },
    {
      id: 3,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../../assets/storage/imgs/img1.png'),
    },
    {
      id: 4,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../../assets/storage/imgs/img1.png'),
    },
    {
      id: 5,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../../assets/storage/imgs/img1.png'),
    },
  ];
  return (
    <>
      <NavigationEvents onWillFocus={fetchArchivements} />
      <View>
        <ScrollView>
          <View style={{ marginTop: 24 }}>
            <View>
              {learn.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('DetailLearn')}
                  >
                    <View
                      style={{
                        height: 107,
                        width: 376,
                        borderWidth: 0.2,
                        marginHorizontal: '5%',
                        marginBottom: 23,
                      }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          source={data.img}
                          style={{ width: 188, height: 107, borderRadius: 8 }}
                        />
                        <View
                          style={{ justifyContent: 'center', marginLeft: 23 }}
                        >
                          <Text
                            style={{
                              fontSize: 18,
                              color: '#145BB6',
                              fontWeight: '700',
                              lineHeight: 21,
                              letterSpacing: -0.32,
                            }}
                          >
                            {data.titleLearn}
                          </Text>
                          <View style={{ flexDirection: 'row', marginTop: 3 }}>
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 21,
                                letterSpacing: -0.32,
                              }}
                            >
                              {data.time}
                            </Text>
                            <Text
                              style={{
                                marginLeft: 12,
                                fontSize: 12,
                                lineHeight: 21,
                                letterSpacing: -0.32,
                              }}
                            >
                              {data.numberLearn}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PerformanceScreen;
