import React from 'react';

import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width, deviceHeight = Dimensions.get("window").height;


export default StyleSheet.create({
    mainDrawer: {
        position: "absolute",
        height: deviceHeight,
        left: 0,
        top: 50,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "100%",
        padding: 5,
        resizeMode: "cover"
    },
    drawerImage: {
        position: "absolute",
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
    },
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight,
        width: null,
        position: "relative",
        marginBottom: 10
    },
    listingTip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 5,
        marginTop: 10,
        height: "auto",
        position: "relative"
    },
    detailIconStyling: {
        position: "absolute",
        right: -20,
        top: -10,
        fontSize: 30
    }
})