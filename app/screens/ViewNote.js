import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewNote = ({ route, navigation }) => {
	const [note, setNote] = useState(route.params.note);
	let noteList = route.params.noteList.map((note) => note);

	const changeTitle = (text) => {
		setNote({ ...note, title: text });
		noteList = noteList.filter((one) =>
			one.id === note.id ? { ...note, title: text } : one
		);
		saveChanges();
	};

	const changeDesc = (text) => {
		setNote({ ...note, desc: text });
		noteList = noteList.filter((one) =>
			one.id === note.id ? { ...note, desc: text } : one
		);
		saveChanges();
	};

	const saveChanges = async () => {
		const data = JSON.stringify(noteList);
		try {
			await AsyncStorage.setItem("noteList", data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View>
			<TextInput
				onChangeText={changeTitle}
				value={note.title}
				multiline={true}
			/>
			<TextInput
				onChangeText={changeDesc}
				value={note.desc}
				multiline={true}
			/>
		</View>
	);
};

export default ViewNote;

const styles = StyleSheet.create({});
