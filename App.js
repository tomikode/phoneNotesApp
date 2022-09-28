import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import colors from "./app/util/colors";
import MainNotes from "./app/screens/MainNotes";
import ViewNote from "./app/screens/ViewNote";

//https://reactnative.dev/docs
//https://reactnavigation.org/
//working on mainnotes state, getItem and setItem

const Stack = createNativeStackNavigator();

export default function App() {
	StatusBar.setBarStyle("white");

	return (
		<NavigationContainer>
			<View style={styles.safe}>
				<Stack.Navigator>
					<Stack.Screen
						name="Main"
						component={MainNotes}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="ViewNote"
						component={ViewNote}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	safe: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: colors.dark,
		height: "100%",
	},
});
