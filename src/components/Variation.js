import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Variation extends Component {
    render() {
        return (
            <TouchableOpacity {...this.props} style={[styles.container, {backgroundColor: this.props.color}]}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}
export default Variation;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    }
});