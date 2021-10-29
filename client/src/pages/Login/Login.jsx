import {useState} from "react";
import {Chat} from "../index";

const Login = ({socket}) => {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [messages, setMessages] = useState(false);

	const joinRoom = (e) => {
		e.preventDefault();
		if (username !== "" && room !== "") {
			socket.emit("join_room", username, room);
			setMessages(true);
		}
	};

	return (
		<div>
			{!messages ?
				<div>
					<h3>Join A Chat</h3>
					<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
					<input type={"text"} placeholder={"Room ID"} onChange={event => setRoom(event.target.value)}/>
					<button onClick={joinRoom}>Join A Room</button>
				</div>
				: <Chat socket={socket} username={username} room={room}/>
			}

		</div>
	);
};

export default Login;