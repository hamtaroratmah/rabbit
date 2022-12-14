
import { GiftedChat, Message } from 'react-native-gifted-chat'


// @ts-ignore
const ChatScreen = ({ navigation}) => {
	const messages = ['message1' , 'message2']

    const id = 1 
    const name = "username"
	
	function onSend(messages) {
		console.log(messages);
	}

	return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,

            }}
        />
    );
};

export default ChatScreen;