import {useContext, useState} from "react";
import {Image, StyleSheet, Text, View,} from "react-native";
import {Header} from "react-native-elements";
import ProgressExperience from "../components/ProgressExperience";
import PopUpInfo from "../components/PopUpInfo";
import CostumedHeaderDiamond from "../components/CostumedHeaderDiamond";
import ComponentIcon from "../components/CompenentIcon";
import {Context as UserIdContext} from "../contexts/IdUserContext";

// @ts-ignore
const HomePageScreenNewUser = ({navigation}) => {
	const textFirstPopUp: string = ` Welcome to us, we're glad you're joining us and becoming a productive rabbit who is ready to learn new habits.
  Before we start let's find out how the application works`;

	const textSecondPopUp: string = `To begin, start by adding a new activity`;

	const [isFirstPopUpVisible, setIsFirstPopUpVisible] = useState(true);
	const [isSecondPopUpVisible, setIsSecondPopUpVisible] = useState(false);
	// @ts-ignore
	const {idUser, defineIdUser} = useContext(UserIdContext);
	const action = () => {
		console.log(idUser);
		setIsFirstPopUpVisible(false);
		setIsSecondPopUpVisible(true);
		console.log("hy");
	};

	return (
		<View style={styles.container}>
			{/********************* header************************** */}
			<Header containerStyle={{backgroundColor: "#F1F3F3"}}/>
			<CostumedHeaderDiamond/>
			<View style={styles.containerHeader}>
				<View style={styles.containerPseudoLevel}>
					<Text style={styles.textPseudo}>Welcome Pseudo</Text>
					<Text style={styles.textLevel}> Level 0</Text>
				</View>

				<View style={styles.containerDiamondProgressBar}>
					<Image
						source={require("./../../assets/icons/dia.png")}
						style={[styles.icon]}
					/>
					{/********* A refaire par sou */}
					<ProgressExperience/>
					{/********* A refaire par sou */}
				</View>

				{/*Pour le diamant qd on atteint un certain niveau le diamant change*/}
			</View>

			{/*********************************************** */}

			{/**Pop up with information */}
			<View style={styles.containerBody}>
				<PopUpInfo
					textModal={textFirstPopUp}
					textBtn="Next"
					isVisible={isFirstPopUpVisible}
					action={() => action()}
				/>

				{/**navigation vers page add activity */}
				<PopUpInfo
					textModal={textSecondPopUp}
					textBtn="Add new activity"
					isVisible={isSecondPopUpVisible}
					action={() => action()}
				/>
			</View>
			{/**Component with different icons*/}
			<ComponentIcon source={require("../../assets/icon.png")}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F1F3F3",
		justifyContent: "space-between",
	},
	containerHeader: {
		backgroundColor: "#FEFEFE",
		borderBottomRightRadius: 25,
		borderTopLeftRadius: 25,
		// marginTop: 40,//à changer
		marginHorizontal: 10,
		justifyContent: "center",
		height: 90,
		shadowColor: "#0E0D0D",
		shadowOffset: {
			width: 1,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,

	},
	containerPseudoLevel: {
		justifyContent: "space-around",
		marginTop: 10,
		flexDirection: "row",
	},
	textPseudo: {
		color: "#0F4E67",
		fontSize: 15,
		fontWeight: "bold",
	},
	textLevel: {
		color: "#0F4E67",
		fontSize: 15,
		fontStyle: "italic",
	},
	containerDiamondProgressBar: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		paddingBottom: 10,
	},
	containerBody: {
		flex: 2,
	},
	icon: {
		height: 30,
		width: 30,
		marginRight: 10
	},
});

export default HomePageScreenNewUser;