import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NotePreview from "../components/NotePreview";
import notes from "../../notes.json";
import colors from "../util/colors";

const MainNotes = ({ navigation }) => {
	const [notes, setNotes] = useState([]);

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
		</View>
	);
};

export default MainNotes;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
	},
	appTitle: {
		fontSize: 40,
	},
	list: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},
});
