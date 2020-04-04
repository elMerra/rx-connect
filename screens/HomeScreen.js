import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import * as firebase from 'firebase'

class HomeScreen extends Component {
        state = {
            email: "",
            displayName: ""
        }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hola {this.state.email} </Text>

                <TouchableOpacity style={{marginTop: 32}} onPress= {this.signOutUser}>
                    <Text>Salir</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});