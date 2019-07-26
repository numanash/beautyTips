import React from 'react';
import { View, Button } from "react-native";
const Pagination = (props) => {
    return (<View style={{ flexDirection: "row" }}>
        <Button onPress={props.onPressPrevious} disabled={props.currentPage === 1 ? true : false} title="Previous" color="red" />
        <Button onPress={props.onPressNext} disabled={props.currentPage === props.lastPage ? true : false} title="Next" color="green" />
    </View>);
}

export default Pagination;