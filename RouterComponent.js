import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";

export default (RouterComponent = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginComponent
    }
  },
  {
    headerMode: "none"
  }
));
