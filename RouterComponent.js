import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";
import HomeComponent from "./src/HomeComponent/HomeComponent"
export default (RouterComponent = createStackNavigator(
  {
    LoginScreen: {
      screen:  HomeComponent
    },
    HomeScreen:{
      screen: LoginComponent
    }
  },
  {
    headerMode: "none"
  }
));
