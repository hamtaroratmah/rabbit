import React, {useState} from "react";

const Context = React.createContext(null);

const ProviderWrapper = (propsIdUser: any) => {
	const [idUser, setIdUser] = useState(null);
	const defineIdUser = (newIdUser: any) => {
		if (newIdUser === null) throw "Invalid idUser";
		setIdUser(newIdUser);
	}

	const exposedValue = {
		idUser,
		defineIdUser
	}

	// @ts-ignore
	return <Context.Provider value={exposedValue}>
		{propsIdUser.children}
	</Context.Provider>

}
export {
	Context,
	ProviderWrapper
}