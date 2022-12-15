import React, {useState} from "react";

const Context = React.createContext(null);

const ProviderWrapper = (propsIdUser: any) => {
	const [session, setSession] = useState(null);
	const defineSession = (newSession: any) => {
		if (newSession === null) throw "Invalid idUser";
		setSession(newSession);
	}

	const exposedValue = {
		session,
		defineSession
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