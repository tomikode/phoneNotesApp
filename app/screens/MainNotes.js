import {
	FlatList,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import NotePreview from "../components/NotePreview";
import notes from "../../notes.json";

const MainNotes = () => {
	const renderNote = ({ item }) => {
		return <NotePreview title={item.title} desc={item.desc} />;
		// return <Text>Test</Text>;
	};
	return (
		<View style={styles.safe}>
			<ScrollView>
				<Text style={styles.appTitle}>Notes</Text>
				{/* <FlatList
					style={styles.container}
					data={notes}
					renderItem={renderNote}
					numColumns={2}
				/> */}
				<View style={styles.list}>
					{notes.map((note) => (
						<NotePreview title={note.title} desc={note.desc} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default MainNotes;

const styles = StyleSheet.create({
	safe: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "red",
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
});
