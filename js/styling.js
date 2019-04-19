import { StyleSheet, } from "react-native";


// Define dark theme styles
export const dark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    welcome: {
        fontSize: 40,
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "#00BFFF",
        color: "white",
        borderRadius: 10
    },
    description: {
        fontSize: 25,
        textAlign: "center",
        margin: 10,
        color: "white"
    },
    weather: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    facebook: {
        marginTop: 30
    },
    city: {
        borderWidth: 1,
        borderColor: "#00BFFF",
        width: 200,
        marginTop: -10,
        height: 50,
        overflow: "hidden"
    },
    city_inside: {
        textAlign: "center",
        color: "white",
        paddingTop: 10,
        fontSize: 20
    },
    picker: {
        marginTop: -80,
        width: "50%",
        height: 100,
    },
    info: {
        marginBottom: 20,
        backgroundColor: "white",
        width: "80%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden"
    },
    weatherTitle: {
        position: "absolute",
        top: 10,
        left: 0,
        right: 0,
        fontSize: 25,
        textAlign: "center",
        color: "#005068",
        fontWeight: "bold"
    },
    weatherImg: {
        width: "100%",
        height: "100%",
    },
    weatherInfo: {
        height: "100%",
        paddingTop: 210,
        paddingLeft: 10,
        position: "absolute"
    },
    weatherInfoText: {
        color: "white",
        fontSize: 20
    }
});


// Define light theme styles
export const light = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    welcome: {
        fontSize: 40,
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "#00BFFF",
        color: "black",
        borderRadius: 10
    },
    description: {
        fontSize: 25,
        textAlign: "center",
        margin: 10,
        color: "black"
    },
    weather: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    facebook: {
        marginTop: 30
    },
    city: {
        borderWidth: 1,
        borderColor: "#00BFFF",
        width: 200,
        marginTop: -10,
        height: 50,
        overflow: "hidden"
    },
    city_inside: {
        textAlign: "center",
        color: "black",
        paddingTop: 10,
        fontSize: 20
    },
    picker: {
        marginTop: -80,
        width: "50%",
        height: 100,
    },
    info: {
        marginBottom: 20,
        backgroundColor: "white",
        width: "80%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden"
    },
    weatherTitle: {
        position: "absolute",
        top: 10,
        left: 0,
        right: 0,
        fontSize: 25,
        textAlign: "center",
        color: "#005068",
        fontWeight: "bold"
    },
    weatherImg: {
        width: "100%",
        height: "100%",
    },
    weatherInfo: {
        height: "100%",
        paddingTop: 210,
        paddingLeft: 10,
        position: "absolute"
    },
    weatherInfoText: {
        color: "white",
        fontSize: 20
    }
});