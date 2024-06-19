import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.HomeIndicator}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u4jvn7suw-1%3A260?alt=media&token=dfb5a3f6-dd3c-4d79-9f6c-31a2a5146aee",
        }}
      />
       <View style={styles.StatusBarIphoneXOrNewer}>
        <View style={styles.LeftSide}>
          <View style={styles._time}>
            <Text style={styles._941}>9:41</Text>
          </View>
        </View>
        <Image
          style={styles.RightSide}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u4jvn7suw-I1%3A261%3B5%3A3008?alt=media&token=cc3fba26-b133-4261-8262-e4f5e6da904a",
          }}
        />
      </View>