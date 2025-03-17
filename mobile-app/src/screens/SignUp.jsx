import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignUp({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("volunteer");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Full Name */}
      <TextInput placeholder="Full Name" placeholderTextColor="#666" style={styles.input} />
      
      {/* Email */}
      <TextInput placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" style={styles.input} />

      {/* Password */}
      <TextInput placeholder="Password" placeholderTextColor="#666" secureTextEntry style={styles.input} />

      {/* Confirm Password */}
      <TextInput placeholder="Confirm Password" placeholderTextColor="#666" secureTextEntry style={styles.input} />

      {/* Selection: Volunteer / Donation */}
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setSelectedOption("volunteer")} style={[styles.radio, selectedOption === "volunteer" && styles.radioSelected]}>
          <Text style={[styles.radioText, selectedOption === "volunteer" && styles.radioTextSelected]}>Volunteer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption("donation")} style={[styles.radio, selectedOption === "donation" && styles.radioSelected]}>
          <Text style={[styles.radioText, selectedOption === "donation" && styles.radioTextSelected]}>Donation</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already a user? Sign In */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInText}>Already a user? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#001F3F",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  radioContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  radio: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#001F3F",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  radioSelected: {
    backgroundColor: "#001F3F",
  },
  radioText: {
    color: "#001F3F",
    fontWeight: "bold",
  },
  radioTextSelected: {
    color: "#FFF",
  },
  button: {
    backgroundColor: "#001F3F",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    marginTop: 15,
    fontSize: 16,
    color: "#001F3F",
    fontWeight: "bold",
  },
});
