
import { GiftedChat, Message } from 'react-native-gifted-chat'


// @ts-ignore
const ChatScreen = ({ navigation}) => {
	const messages = ['message1' , 'message2']

	function onSend(messages) {
		console.log(messages);
	}

	return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            onSend={messages => onSend(messages)}
            user={{
                _id: session?.currentUser?.id,
                name: session?.currentUser?.username,
            }}
        />
    );
};

export default ChatScreen;