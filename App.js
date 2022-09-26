import { StyleSheet, Text, View } from "react-native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import MainNotes from "./app/screens/MainNotes";

//https://reactnative.dev/docs

export default function App() {
	return (
		<View>
			<MainNotes />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
