import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View,} from "react-native";
import CostumedButton from "../components/CostumedButton";
import CostumedTextInput from "../components/CostumedTextInput";
import Separator from "../components/CostumedLine";
import ButtonLoginGoogle from "../components/CostumedGoogleButton";
import {AuthController} from "../controllers/AuthController";
import {useContext, useState} from "react";
import {Context as UserIdContext} from "../contexts/IdUserContext";

// @ts-ignore
const SignInScreen = ({navigation}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// @ts-ignore
	const {idUser, defineIdUser} = useContext(UserIdContext);
	const controller = new AuthController();
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "position" : "height"}
			style={styles.container}
		>
			<View style={styles.contenairLogo}>
				<Image
					source={require("./../../assets/img/logo.png")}
					style={styles.logo}
				/>
			</View>
			<View style={styles.contenairBody}>
				<View>
					<Text style={styles.caption}>Log in to your account</Text>
				</View>
				<View style={styles.button}>
					<CostumedTextInput
						placeHolderText="Email"
						value={email}
						setValue={setEmail}
						secureTextEntry={false}
					/>
					<CostumedTextInput
						placeHolderText="Password"
						value={password}
						setValue={setPassword}
						secureTextEntry={true}
					/>
				</View>
				<View style={styles.button}>
					<CostumedButton
						text="Log in"
						action={async () => {
							const response = await controller.login(email, password);
							if (response.error === null) {
								const userToken = response.data.session?.access_token;
								defineIdUser(userToken);
								navigation.navigate("HomePageScreenUser");
							} else {
								console.log(response.error);
							}
						}}
					/>
				</View>

				<View>
					<Text style={styles.textQuestion}>Want to join us ?</Text>
					<Text
						onPress={() => navigation.navigate("SignUp")}
						style={styles.href}
					>
						Create new account
					</Text>
				</View>
				<View>
					<Separator/>
				</View>
				<ButtonLoginGoogle/>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFFBFB",
	},
	contenairLogo: {
		flex: 1 / 2,
		justifyContent: "center",
	},
	contenairBody: {
		flex: 1 / 2,
		justifyContent: "center",
		marginTop: 50,
	},
	logo: {
		//marginTop: 10,
		width: 200,
		height: 200,
		overflow: "visible",
		alignSelf: "center",
	},

	caption: {
		fontSize: 19,
		marginBottom: 5,
		justifyContent: "center",
		textAlign: "center",
		color: "#142b6f",
		alignSelf: "center",
	},

	button: {
		alignSelf: "center",
	},

	textQuestion: {
		fontSize: 15,
		justifyContent: "center",
		textAlign: "center",
		color: "black",
		fontStyle: "italic",
	},
	href: {
		fontSize: 15,
		margin: 10,
		justifyContent: "center",
		textAlign: "center",
		color: "#142b6f",
		alignSelf: "center",
		textDecorationLine: "underline",
	},
});
export default SignInScreen;
