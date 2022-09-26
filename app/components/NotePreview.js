import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

const NotePreview = ({ title, desc }) => {
	return (
		<View style={styles.container}>
			<View style={styles.note}>
				<Text style={styles.heading}>{title}</Text>
				<Text style={styles.desc}>{desc}</Text>
			</View>
		</View>
	);
};

export default NotePreview;

const styles = StyleSheet.create({
	container: {
		width: "50%",
	},
	note: {
		borderWidth: 2,
		borderColor: colors.black,
		height: 200,
		margin: 5,
	},
	heading: {
		fontSize: 25,
	},
});
