import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../util/colors";

const NotePreview = ({ note, noteList, navigation }) => {
	const openNote = () => {
		navigation.navigate("ViewNote", { note, noteList });
	};

	return (
		<TouchableOpacity onPress={openNote} style={styles.container}>
			<View style={styles.note}>
				<Text style={styles.heading}>{note.title}</Text>
				<Text style={styles.desc}>{note.desc}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NotePreview;

const styles = StyleSheet.create({
	container: {
		width: "50%",
	},
	note: {
		borderWidth: 2,
		borderColor: colors.light,
		height: 200,
		margin: 7,
	},
	heading: {
		color: colors.light,
		fontSize: 25,
	},
	desc: {
		color: colors.light,
	},
});
