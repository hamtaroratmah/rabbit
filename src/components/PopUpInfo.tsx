import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";


const PopUpInfo = ({isVisible, textModal, action, textBtn}
	                   : { isVisible: boolean, textModal: string, action: any, textBtn: string }) => {
	return (
		<View>
			<Modal transparent={true} visible={isVisible}>
				<View style={styles.centeredView}>
					<Image
						source={require("./../../assets/icons/rabbitCrown.png")}
						style={styles.rabbitCrown}
					/>

					<View style={styles.modalView}>
						<Text style={styles.modalText}>{textModal}</Text>
						<Pressable style={styles.btn} onPress={action}>
							<Text style={styles.textBtn}> {textBtn} </Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	rabbitCrown: {
		alignSelf: "flex-end",
		marginRight: 20,
		marginBottom: -15,
		height: 90,
		width: 90,
		zIndex: 1,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		//alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#0E0D0D",
		shadowOffset: {
			width: 1,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		fontSize: 16,
	},
	btn: {
		alignSelf: "flex-end",
		borderRadius: 10,
		backgroundColor: "#207B9F",
		width: 125,
		alignItems: "center",
		justifyContent: "center",
		height: 35,
		marginTop: 10,
	},
	textBtn: {
		color: "#FEFEFE",
		fontWeight: "bold",
	},
});

export default PopUpInfo;