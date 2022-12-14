import  React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
export type Props = {
    challengeName:string,
    onPress:any
}
const ChatHeader = ({ challengeName,onPress} : Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={onPress}>
				<Icon name="angle-left" size={30} color="white" />
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.image} source={require("../../assets/img/avatar.jpg")} />
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{challengeName}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingTop: 40,
		paddingBottom: 10,
        backgroundColor:"#0F4E67"
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
        color:"white"
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
        color:"white"
	},
	username: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;