// Import Components
import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  Picker,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

// Import location details
import * as data from "./city.list.json";


const a = {
  id: 1559969,
  name: "T\u1ec9nh Ngh\u1ec7 An",
  country: "VN",
  coord: { lon: 104.833328, lat: 19.33333 }
};

// Main App Component
export default class App extends Component {
  // Define initial props and state
  constructor(props) {
    super(props);
    this.state = {
      style: dark,
      cityname: null,
      city: null,
      text: null,
      temperature: null,
      pressure: null,
      humidity: null
    };
  }

  componentWillMount() {
    this.setState({ city: data.default[0], text: data.default[0].name });
  }

  componentDidMount() {
    this.fetchWeather(this.state.city.coord.lat, this.state.city.coord.lon);
  }

  fetchWeather(lat, lon) {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=8cb20985ef311ad1d1695780c2bc65ec`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          temperature: responseJson.main.temp,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Change state of the whole component when a touchable component is pressed
  onPress = () => {
    if (this.state.style === dark) {
      this.setState({ style: light });
    } else {
      this.setState({ style: dark });
    }
  };

  updateCity = (itemValue, itemIndex) => {
    data.default.map((item, index) => {
      if (item.name === itemValue) {
        this.setState({ cityname: itemValue, text: itemValue, city: item });
      }
    });
  this.fetchWeather(this.state.city.coord.lat, this.state.city.coord.lon);
  };

  submitInput = text => {
    for (let i = 0; i < data.default.length; i++) {
      if (data.default[i].name == this.state.text) {
        this.setState({ city: data.default[i], cityname: this.state.text });
        this.fetchWeather(
          this.state.city.coord.lat,
          this.state.city.coord.lon
        );
      }
    }
  };

  // Render the JSX
  render() {
    return (
      <KeyboardAvoidingView
        style={this.state.style.container}
        behavior="padding"
        keyboardVerticalOffset="-200"
        enabled
      >
        <Text style={this.state.style.welcome}>Weather App</Text>

        {/* Set the app description as a touchable component */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={this.state.style.description}>
            Weather Statistics
          </Text>
        </TouchableOpacity>

        <View style={this.state.style.weather}>
          <Text style={this.state.style.facebook}>FB LOGIN BUTTON</Text>
          <View style={this.state.style.city}>
            <TextInput
              value={this.state.text}
              style={this.state.style.city_inside}
              onChangeText={text => this.setState({ text })}
              onSubmitEditing={this.submitInput}
            />
          </View>
          <Picker
            style={this.state.style.picker}
            selectedValue={this.state.cityname}
            onValueChange={this.updateCity}
          >
            {data.default.map((item, index) => (
              <Picker.Item
                color="#00BFFF"
                label={item.name}
                value={item.name}
                key={index}
              />
            ))}
          </Picker>

          <View style={this.state.style.info}>
            <ImageBackground
              source={require("./b.png")}
              style={this.state.style.weatherImg}
            >
              <Text style={this.state.style.weatherTitle}>
                {this.state.city.name}
              </Text>
              <View style={this.state.style.weatherInfo}>
                <Text style={this.state.style.weatherInfoText}>
                  Temperature: {this.state.temperature} °C
                </Text>
                <Text style={this.state.style.weatherInfoText}>
                  Pressure: {this.state.pressure} Pa
                </Text>
                <Text style={this.state.style.weatherInfoText}>
                  Humidity: {this.state.humidity} %
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// Define dark theme styles
const dark = StyleSheet.create({
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
    color: "white",
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#00BFFF"
  },
  city: {
    borderWidth: 1,
    borderColor: "#00BFFF",
    marginTop: 40,
    width: 200,
    height: 50,
    overflow: "hidden",
  },
  city_inside: {
    textAlign: "center",
    color: "white",
    paddingTop: 10,
    fontSize: 20
  },
  picker: {
    marginTop: -30,
    width: "50%",
    color: "white"
  },
  info: {
    marginBottom: 20,
    backgroundColor: "white",
    width: "80%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  weatherTitle: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    fontSize: 25,
    textAlign: "center",
    color: "white"
  },
  weatherImg: {
    width: "100%",
    height: "auto",
    opacity: .8
  },
  weatherInfo: {
    height: "100%",
    paddingTop: 210,
    paddingLeft: 10
  },
  weatherInfoText: {
    color: "white",
    fontSize: 20
  }
});

// Define light theme styles
const light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "#00bfff",
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
    color: "black",
    marginTop: 30,
    borderWidth: 2,
    borderColor: "lightblue"
  },
  city: {
    borderWidth: 1,
    borderColor: "lightblue",
    marginTop: 40,
    width: 200,
    height: 50
  },
  city_inside: {
    textAlign: "center",
    color: "black",
    paddingTop: 10,
    fontSize: 20
  },
  picker: {
    marginTop: -50,
    width: "50%",
    color: "black"
  },
  info: {
    marginBottom: 20,
    backgroundColor: "white",
    width: "80%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  weatherTitle: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    fontSize: 25,
    textAlign: "center",
    color: "white"
  },
  weatherImg: {
    width: "100%",
    height: "auto",
    opacity: .8
  },
  weatherInfo: {
    height: "100%",
    paddingTop: 210,
    paddingLeft: 10
  },
  weatherInfoText: {
    color: "white",
    fontSize: 20
  }
});