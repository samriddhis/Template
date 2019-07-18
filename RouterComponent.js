import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";
import HomeComponent from "./src/HomeComponent/HomeComponent"
export default (RouterComponent = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginComponent
    },
    HomeScreen:{
      screen: HomeComponent
    }
  },
  {
    headerMode: "none"
  }
));
