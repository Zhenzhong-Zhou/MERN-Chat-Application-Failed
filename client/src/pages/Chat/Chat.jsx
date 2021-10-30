import {useEffect, useState} from "react";

const Chat = ({socket, username, email, password, room}) => {
	const [currentMessage, setCurrentMessage] = useState();

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room,
				username,
				email,
				password,
				message: currentMessage,
				time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
			};
			await socket.emit("send_messages", messageData)
		}
	};

	useEffect(() => {
		socket.on("receive_messages", (messageData) => {
			console.log(messageData)
		});
	}, [socket]);

	return (
		<div>
			<div className={"chat-header"}>
				<p>Live Chat</p>
			</div>
			<div className={"chat-body"}></div>
			<div className={"chat-footer"}>
				<input type={"text"} placeholder={"Message..."} onChange={event => setCurrentMessage(event.target.value)}/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>
		</div>
	);
};

export default Chat;