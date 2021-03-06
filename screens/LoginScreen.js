import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Image
} from "react-native";
import * as firebase from 'firebase'


class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }
    render() {
        return (
            <View style={styles.container}>
                    <StatusBar barStyle="default"></StatusBar>
                    <View style={styles.logo}>
                    <Image source={require("../assets/icon.png")}
                    style={{ height: 200, width: 370}}                    
                    >

                    </Image>
                    </View>
                    <Text style={styles.greeting}>
                        {'Bienvenido de nuevo!'}
                    </Text>

             <View style={styles.errorMessage}>
                 {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                
            </View>
                <View style={styles.form}>
                    <View>
                         <Text style={styles.inputTitle}>Email</Text>
                         <TextInput 
                         style={styles.input} 
                         autoCapitalize="none"
                         onChangeText={email => this.setState({ email })}
                         value={this.state.email}
                         ></TextInput>
                    </View>
                    <View style={{marginTop: 32 }}>
                         <Text style={styles.inputTitle}>Contraseña</Text>
                         <TextInput 
                         style={styles.input} 
                         secureTextEntry 
                         autoCapitalize="none"
                         onChangeText={password => this.setState({ password })}
                         value={this.state.password}
                         ></TextInput>
                    </View> 
                </View>
                
                    
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#FFF", fontWeight: "500"}}>Iniciar sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}} onPress={()=> this.props.navigation.navigate("Register")}>
                    <Text style={{ color: "#414959", fontSize: 13}}>
                        Nuevo en la plataforma? <Text style={{ fontWeight: "600", color: "#173F5F" }}>Registrar-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>  
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent:"center",
        backgroundColor: "#F3ECE0"
    },
    greeting:{
        marginTop: 32,
        fontSize:25,
        fontWeight:"700",
        textAlign: "center",
        color: "#173F5F"
    },
    errorMessage:{
        height:72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        
    },
    form:{
         marginBottom: 48,
         marginHorizontal: 30
    },
    inputTitle:{
         color:"#173F5F",
         fontSize:10,
         textTransform: "uppercase"
    },
    input: {
       borderBottomColor: "#173F5F",
        borderBottomWidth:  StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: "#173F5F",
        borderRadius: 15,
        height: 52,
        alignItems: "center",
        justifyContent: "center"

    }
});