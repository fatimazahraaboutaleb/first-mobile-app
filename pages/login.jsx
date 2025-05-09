import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "./button";

export default function Login() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Login here</Text>
            <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
        </View>
        <View style={styles.main}>
            <TextInput placeholder="Email"  style={styles.input} />
            <TextInput placeholder="Password"  style={styles.input} />
            <Text>Forgot Password?</Text>
            <View style={styles.button}>
                <Button>Login</Button>
                <Button light={true}>Create Account</Button>
            </View>
        </View>
    </View>    
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#1F41BB',
    fontSize: 35,
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  subtitle:{
    fontSize: 15,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
},
  button:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    gap: 20,
  }
});
