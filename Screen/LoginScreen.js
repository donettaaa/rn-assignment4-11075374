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
      <View style={styles.Group596}>
        <Text style={styles.Jobizz}>Jobizz</Text>
        <View style={styles.Group46}>
          <Text style={styles.Headline}>Welcome Back 👋</Text>
          <Text style={styles.Headline1}>Let’s log in. Apply to jobs!</Text>
        </View>
        <View style={styles.Group49}>
          <View style={styles.Group48}>
            <Text style={styles.Name}>Name</Text>
          </View>
          <View style={styles.Group47}>
            <Text style={styles.Email}>Email</Text>
          </View>
          <View style={styles.Button}>
            <Text style={styles.Next}>Log in</Text>
          </View>
        </View>
        <View style={styles.Group52}>
          <Text style={styles.OrContinueWith}>Or continue with</Text>
          <View style={styles.Line183} />
          {/* Add Google, Apple, Facebook icons here */}
          <Image
            style={styles.Group57}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u4jvn7suw-1%3A292?alt=media&token=95c2805f-2e68-46b8-9065-a6d7d9b54c0a",
            }}
          />
          <Text style={styles.HavenTAnAccountRegis}>
            Haven’t an account? Register
          </Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "rgba(250,250,253,1)",
      paddingHorizontal: 24, // Added padding to ensure equal left and right margins
    },
    HomeIndicator: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 34,
    },
    StatusBarIphoneXOrNewer: {
      width: "100%",
      height: 44,
      paddingHorizontal: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24, // Ensures consistent spacing
    },
    LeftSide: {
      width: 54,
    },
    _time: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    _941: {
      color: "rgba(13,13,38,1)",
      fontSize: 15,
      fontWeight: "600",
      textAlign: "center",
      letterSpacing: "-0.5px",
    },
    RightSide: {
      width: 66.66,
      height: 11.34,
    },
    HavenTAnAccountRegis: {
      color: "rgba(189,190,194,1)",
      fontSize: 14,
      fontWeight: "400",
      textAlign: "center",
      marginTop: 24, // Ensures consistent spacing
    },
    Group596: {
      width: "100%",
      alignItems: "center",
    },
    Jobizz: {
      color: "rgba(53,104,153,1)",
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 24, // Ensures consistent spacing
      alignSelf: 'flex-start' // Aligns to the left
    },
    Group46: {
      width: "100%",
      marginBottom: 24, // Ensures consistent spacing
    },
    Headline: {
      color: "rgba(13,13,38,1)",
      fontSize: 24,
      fontWeight: "600",
      marginBottom: 8, // Ensures consistent spacing
      alignSelf: 'flex-start' // Aligns to the left
    },
    Headline1: {
      color: "rgba(13,13,38,1)",
      fontSize: 14,
      fontWeight: "400",
      marginBottom: 24, // Ensures consistent spacing
      alignSelf: 'flex-start' // Aligns to the left
    },
    Group49: {
      width: "100%",
      marginBottom: 24, // Ensures consistent spacing
    },
    Group48: {
      width: "100%",
      height: 52,
      paddingHorizontal: 15,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "rgba(175,176,182,1)",
      borderRadius: 10,
      marginBottom: 16,
    },
    Name: {
      color: "rgba(175,176,182,1)",
      fontSize: 14,
      fontWeight: "500",
    },
    Group47: {
      width: "100%",
      height: 52,
      paddingHorizontal: 15,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "rgba(175,176,182,1)",
      borderRadius: 10,
      marginBottom: 16,
    },
    Email: {
      color: "rgba(175,176,182,1)",
      fontSize: 14,
      fontWeight: "500",
    },
    Button: {
      width: "100%",
      height: 52,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "rgba(53,104,153,1)",
    },
    Next: {
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      fontWeight: "500",
    },
    Group52: {
      width: "100%",
      alignItems: "center",
    },
    OrContinueWith: {
      color: "rgba(175,176,182,1)",
      fontSize: 13,
      fontWeight: "400",
      textAlign: "center",
      marginBottom: 8, // Ensures consistent spacing
    },
    Line183: {
      width: "100%",
      height: 0.5,
      borderWidth: 0.5,
      borderColor: "rgba(175,176,182,1)",
      marginBottom: 24, // Ensures consistent spacing
    },
    Group57: {
      width: 216,
      height: 56,
      marginBottom: 24, // Ensures consistent spacing
    },
  });