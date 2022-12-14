import {StyleSheet, Text, View} from "react-native";
import {Header} from "react-native-elements";
import CostumedHeaderDiamond from "../components/CostumedHeaderDiamond";
import ComponentListHorizontalHabits from "../components/ComponentListHorizontalHabits";
import ComponentListHorizontalChallengens from "../components/ComponentListHorizontalChallengens";

// @ts-ignore
const HomePageScreenUser = ({navigation}) => {
	const habits = [
		{
			id: 1,
			title: "bla bla bla bla bla",
		},
		{
			id: 2,
			title: "Title",
		},
		{
			id: 3,
			title: "Title",
		},
		{
			id: 4,
			title: "Title",
		},
	];

	const challengens = [
		{
			id: 1,
			title: "Title",
		},
		{
			id: 2,
			title: "Title",
		},
		{
			id: 3,
			title: "Title",
		},
		{
			id: 4,
			title: "Title",
		},
	];

	return (
		<View style={styles.container}>
			{/********************* header************************** */}
			<Header containerStyle={{backgroundColor: "#F1F3F3"}}/>
			<CostumedHeaderDiamond/>

			{/*********************************************** */}

			{/**Motivation Paragraphe */}
			<View style={styles.containerBody}>
				<View style={styles.contenairMotivation}>
					<Text style={styles.textMotivation}>
						Life is not all about studying. But if you can’t even conquer this
						little part of life, then what else can you possibly do?
					</Text>
					<Text style={styles.textAuthor}>Chay Souli</Text>
				</View>
				<View style={styles.contenairScrollHorizental}>
					<ComponentListHorizontalHabits dataList={habits}/>
					<Text style={{alignSelf: "center", fontSize: 17}}>
						Go to habits
					</Text>
				</View>

				<View style={styles.contenairScrollHorizental}>
					<ComponentListHorizontalChallengens dataList={challengens}/>
					<Text style={{alignSelf: "center", fontSize: 17}}>
						Go to challenges
					</Text>
				</View>
			</View>

			{/**Component with different icons*/}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F1F3F3",
		justifyContent: "space-between",
	},
	containerBody: {
		flex: 2,
	},
	contenairMotivation: {
		backgroundColor: "#FEFEFE",
		margin: 15,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		height: 150,
		flex: 1 / 3,
		shadowColor: "#0E0D0D",
		shadowOffset: {
			width: 1,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	textMotivation: {
		fontSize: 16,
	},
	textAuthor: {
		alignSelf: "flex-end",
		paddingRight: 30,
		fontStyle: "italic",
		fontSize: 15,
	},

	habit: {
		backgroundColor: "#A1CDDE",
		margin: 15,
		borderRadius: 25,
		justifyContent: "center",
		alignContent: "space-between",
		height: 130,
		width: 220,
	},
	b: {
		backgroundColor: "E88006",
	},
	textActivity: {
		fontSize: 20,
	},
	listActivities: {
		alignSelf: "center",
	},
	contenairScrollHorizental: {
		backgroundColor: "#FEFEFE",
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
		shadowColor: "#0E0D0D",
		shadowOffset: {
			width: 1,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		flex: 1 / 4,
	},
});

export default HomePageScreenUser;
