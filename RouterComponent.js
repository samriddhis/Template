import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";
import HomeComponent from "./src/HomeComponent/HomeComponent";
import MenuComponent from "./src/MenuComponent/MenuComponent";
import Template from "./src/Template";

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
    },
    Template: {
      screen: Template
    }
  },
  {
    headerMode: "none"
  }
));
