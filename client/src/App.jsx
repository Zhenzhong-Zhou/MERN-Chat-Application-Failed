import {useEffect} from "react";
import {io} from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, Login} from "./pages";

const App = () => {
	useEffect(() => {
		const socket = io("http://localhost:9000")
		console.log(socket)
	},[]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/login"} component={Login}/>
				<Route exact path={"/"} component={Home}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;