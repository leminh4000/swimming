import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DetailLearn = ({ navigation, route }) => {
  const { level } = route.params;
  const { titleLearn } = route.params;
  const { numberLearn } = route.params;
  const { time } = route.params;
  const { img } = route.params;
  const { video1 } = route.params;
  const { video2 } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ width: "100%", height: 329 }}>
            <Image
              style={{ width: "100%", height: 280 }}
              source={require("../../assets/storage/imgs/img1.png")}
            />
            <Text
              style={{
                marginTop: 12,
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "700",
                color: "#145BB6",
                lineHeight: 21,
              }}
            >
              KỸ THUẬT TAY
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 25,
              marginTop: 19,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="heart-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                    marginBottom: 4,
                  }}
                >
                  Level
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 16,
                    color: "#145BB6",
                  }}
                >
                  Beginner
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="time-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                  }}
                >
                  Time
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="share-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                    marginBottom: 4,
                  }}
                >
                  Số bài tập
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 16,
                    color: "#145BB6",
                  }}
                >
                  3 videos
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 28 }}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("VideoLearn")}
              >
                <View
                  style={{
                    height: 107,
                    width: 376,
                    borderWidth: 0.2,
                    marginHorizontal: "5%",
                    marginBottom: 23,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={img}
                      style={{ width: 188, height: 107, borderRadius: 8 }}
                    />
                    <View style={{ justifyContent: "center", marginLeft: 23 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#145BB6",
                          fontWeight: "700",
                          lineHeight: 21,
                          letterSpacing: -0.32,
                        }}
                      >
                        {titleLearn}
                      </Text>
                      <View style={{ flexDirection: "row", marginTop: 3 }}>
                        <Text
                          style={{
                            fontSize: 12,
                            lineHeight: 21,
                            letterSpacing: -0.32,
                          }}
                        >
                          {time}
                        </Text>
                        <Text
                          style={{
                            marginLeft: 12,
                            fontSize: 12,
                            lineHeight: 21,
                            letterSpacing: -0.32,
                          }}
                        >
                          {numberLearn}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailLearn;
