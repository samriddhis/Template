import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";
import HomeComponent from "./src/HomeComponent/HomeComponent";
import MenuComponent from "./src/MenuComponent/MenuComponent";
export default (RouterComponent = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginComponent
    },
    HomeScreen: {
      screen: HomeComponent
    },
    MenuScreen: {
      screen: MenuComponent
    }
  },
  {
    headerMode: "none"
  }
));
