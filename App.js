// Import Components from React Libraries
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Picker,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

// Import location data
import * as data from "./city.list.json";

// Import Stylesheets
import {dark, light} from "./js/styling.js";

// Import LoginButton Component
import {Login} from "./js/login.js";


// Main App Component
export default class App extends Component {
  
  // Define initial props and state
  constructor(props) {
    super(props);
    this.state = {
      style: dark,
      cityname: data.default[4].name,
      city: data.default[4],
      text: data.default[4].name,
      temperature: null,
      pressure: null,
      humidity: null,
    };
  }

  // Run the function after done rendering
  componentDidMount() {
    this.updateCity(this.state.city.name);
  }

  // Fetching the weather from OpenWeatherAPI
  fetchWeather(item) {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${item.coord.lat}&lon=${item.coord.lon}&units=metric&APPID=8cb20985ef311ad1d1695780c2bc65ec`
    )

      // Get the response in JSON format and set the value to states
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          cityname: item.name, 
          text: item.name, 
          city: item,
          temperature: responseJson.main.temp,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
        });
      })

      // Catching error
      .catch(error => {
        console.log(error);
      });
  }

  // Change state of the whole App Component between dark and light theme when a button is touched
  onPress = () => {
    if (this.state.style === dark) {
      this.setState({ style: light });
    } else {
      this.setState({ style: dark });
    }
  };

  // Update the state based on value chosen in Picker component
  updateCity = (itemValue) => {
    data.default.map((item) => {
      if (item.name === itemValue) {
        this.setState({
          cityname: itemValue, 
          text: itemValue, 
          city: item});
        this.fetchWeather(item);
      }
    });
  };

  // Update the state based on value chosen in TextInput component
  submitInput = () => {
    for (let i = 0; i < data.default.length; i++) {
      if (data.default[i].name == this.state.text) {
        this.fetchWeather(data.default[i]);
      }
    }
  };

  // Render the JSX
  render() {

    // Conditions to render different image for different weather condition
    const temp = this.state.temperature;
    let weatherImage;

    // If the temperature of the city below 30 degree (try "Da Lat" in the Input field)
    if (temp < 30) {
      weatherImage = <Image
          source={require("./static/cool.png")}
          style={this.state.style.weatherImg}
        />;
    // Else (try "Lagi" in the Input field)    
    } else {
      weatherImage = (
        <Image
          source={require("./static/hot.jpg")}
          style={this.state.style.weatherImg}
        />
      );
    };

    // Main JSX script
    return (

      // Avoid the keyboard's misbehavior when user typing in by using this component
      <KeyboardAvoidingView
        style={this.state.style.container}
        behavior="padding"
        keyboardVerticalOffset="-200"
        enabled
      >

        {/* The App Title */}
        <Text style={this.state.style.welcome}>Weather App</Text>
        
        {/* Change Theme using the description line as a button */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={this.state.style.description}>
            Weather Statistics
          </Text>
        </TouchableOpacity>

        {/* Display main body of the component */}
        <View style={this.state.style.weather}>

          {/* Display Facebook Login Button */}
          <View style={this.state.style.facebook}>
            <Login/>
          </View>

          {/* Display City name indicator */}
          <View style={this.state.style.city}>
            <TextInput
              value={this.state.text}
              style={this.state.style.city_inside}
              onChangeText={text => this.setState({ text })}
              onSubmitEditing={this.submitInput}
            />
          </View>

          {/* Display Picker component */}
          <Picker
            style={this.state.style.picker}
            selectedValue={this.state.cityname}
            onValueChange={this.updateCity}
          >

            {/* Listing all items in the data file */}
            {data.default.map((item, index) => (
              <Picker.Item
                color="#00BFFF"
                label={item.name}
                value={item.name}
                key={index}
              />
            ))}
          </Picker>

          {/* Display Weather Info Panel */}
          <View style={this.state.style.info}>

            {/* Display Weather Image (Interchangable based on the logic in the beginning of render() */}
            {weatherImage}
          
            {/* City Name */}
            <Text style={this.state.style.weatherTitle}>
              {this.state.city.name}
            </Text>

            {/* Fetched Weather Information */}
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
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}