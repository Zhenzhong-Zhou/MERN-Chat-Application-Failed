import {useEffect} from "react";
import {io} from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Chat, Home, Login} from "./pages";

const socket = io("http://localhost:9000");

const App = () => {
	useEffect(() => {
		console.log(socket)
	},[]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/login"} component={() => <Login socket={socket}/>}/>
				<Route exact path={"/"} component={Home}/>
				{/*<Route exact path={"/"} component={() => <Chat socket={socket}/>}/>*/}
			</Switch>
		</BrowserRouter>
	);
};

export default App;