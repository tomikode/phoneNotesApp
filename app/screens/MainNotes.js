import {
	Button,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import NotePreview from "../components/NotePreview";
import colors from "../util/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const MainNotes = ({ navigation }) => {
	const [notes, setNotes] = useState([]);

	useFocusEffect(
		React.useCallback(() => {
			const getNotes = async () => {
				const gotNotes = await AsyncStorage.getItem("notes");
				const parsedNotes = JSON.parse(gotNotes);
				setNotes(parsedNotes);
			};
			getNotes();
			console.log("effect");
		}, [])
	);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.list}>
					{notes.map((note) => (
						<NotePreview
							key={note.id}
							note={note}
							noteList={notes}
							navigation={navigation}
						/>
					))}
				</View>
			</ScrollView>
			<TouchableHighlight
				activeOpacity={0.6}
				underlayColor={colors.light}
				onPress={() => {}}
				style={styles.plusBox}
			>
				<Feather
					name="plus"
					size={64}
					color="black"
					style={styles.plus}
				/>
			</TouchableHighlight>
		</View>
	);
};

export default MainNotes;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		height: "100%",
	},
	appTitle: {
		fontSize: 40,
	},
	list: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	plus: {
		color: colors.light,
	},
	plusBox: {
		position: "absolute",
		bottom: 12,
		right: 12,
		backgroundColor: colors.dark,
		borderColor: colors.black,
		borderWidth: 2,
		borderRadius: 10,
	},
});
