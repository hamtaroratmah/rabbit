import {ProviderWrapper as UserProviderWrapper} from "./src/contexts/SessionContext";
import App from "./src/App";
import {registerRootComponent} from "expo";

function Boot() {
	return (
		<UserProviderWrapper>
			<App/>
		</UserProviderWrapper>
	);
}

export default registerRootComponent(Boot);