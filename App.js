import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Splash from "./screens/Splash";
import ARScreen from "./ARScreen";
import Home from "./screens/Home";
import NavigationScreen from "./screens/NavigationScreen";
import ARScreenTwo from "./ARScreenTwo";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingTIL: true,
            loadingNL: false,
            loadingWelcome: false,
            loadingAr: false,
            loadingAr2: false,
            loadingNavigation: false
        };
        this.handleClick= this.handleClick.bind(this)
        this.navClick= this.navClick.bind(this)
        this.navClickTwo= this.navClickTwo.bind(this)
        console.log(this.state.loadingAr)
    }

    componentDidMount() {
        const TILTimeout = setTimeout(() => {
            this.setState({ loadingTIL: false, loadingNL: true });
            this.showWelcome();
        }, 3000);


    }

    showWelcome = () => {
        setTimeout(() => {
            this.setState({ loadingNL: false, loadingWelcome: true });
        },);
    };

    async handleClick  ()  {
       await this.setState({loadingNavigation: true})
        await this.setState({loadingWelcome: false})
        console.log(this.state.loadingAr)
    }


    async navClick  ()  {
        await this.setState({loadingWelcome: false})
        await this.setState({loadingNavigation: false})
        await this.setState({loadingAr: true})
    }

    async navClickTwo  ()  {
        await this.setState({loadingWelcome: false})
        await this.setState({loadingNavigation: false})
        await this.setState({loadingAr2: true})
    }


    render() {
        if (this.state.loadingTIL) {
            return <Splash />;
        } else if (this.state.loadingWelcome)
            return (
                <View style={styles.container}>
                    <Home onPress={this.handleClick}/>
                </View>
            );
        else if (this.state.loadingNavigation==true) {
            return <NavigationScreen
                onPressUp={this.navClick}
                onPressDown={this.navClickTwo}
            />
        }
        else if (this.state.loadingAr==true) {
            return  <ARScreen />
        }
        else if (this.state.loadingAr2==true) {
            return  <ARScreenTwo />
        }

        else return null;

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


