import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Pagination = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        width: "100%",
        paddingRight: 20
      }}
    >
      <TouchableOpacity
        onPress={props.onPressPrevious}
        disabled={props.currentPage === 1 ? true : false}
      >
        <Icon
          size={40}
          name="ios-arrow-dropleft"
          color={props.currentPage === 1 ? "#C0C0C0" : "#FFFFFF"}
        />
      </TouchableOpacity>

      {/* <Button
        onPress={props.onPressNext}
        disabled={props.currentPage === props.lastPage ? true : false}
        title="Next"
        color="green"
      /> */}
      <Text style={{ paddingVertical: 10, color: "#FFFFFF" }}>
        {props.currentPage} of {props.lastPage} Page
      </Text>
      <TouchableOpacity
        onPress={props.onPressNext}
        disabled={props.currentPage === props.lastPage ? true : false}
      >
        <Icon
          size={40}
          name="ios-arrow-dropright"
          color={props.currentPage === props.lastPage ? "#C0C0C0" : "#FFFFFF"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
