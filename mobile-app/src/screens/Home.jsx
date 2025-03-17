import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "navy", marginBottom: 20 }}>
        Welcome to Our NGO
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", color: "gray", marginBottom: 30 }}>
        We believe in making the world a better place. Join us in our mission!
      </Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate("SignUp")}
        style={{ backgroundColor: "navy", padding: 12, borderRadius: 8, width: "80%", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
