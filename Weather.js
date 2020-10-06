import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{condition}</Text>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </LinearGradient>
  );
}

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#b92b27', '#1565C0'],
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#a8c0ff', '#3f2b96'],
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#373B44', '#4286f4'],
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7F7FD5', '#86A8E7', '#91EAE4'],
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#636363', '#a2ab58'],
  },
  Smoke: {
    iconName: 'weather-tornado',
    gradient: ['#005AA7', '#FFFDE4'],
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#4DA0B0', '#D39D38'],
  },
  Dust: {
    iconName: 'weather-hazy',
    gradient: ['#f12711', '#f5af19'],
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#8e9eab', '#eef2f3'],
  },
  Sand: {
    iconName: 'weather-hazy',
    gradient: ['#8360c3', '#2ebf91'],
  },
  Ash: {
    iconName: 'weather-hazy',
    gradient: ['#544a7d', '#ffd452'],
  },
  Squall: {
    iconName: 'weather-rainy',
    gradient: ['#59C173', '#a17fe0', '#5D26C1'],
  },
  Tornado: {
    iconName: 'weather-hurricane',
    gradient: ['#654ea3', '#eaafc8'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#2980B9', '#6DD5FA'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#a8ff78', '#78ffd6'],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 30,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '200',
    marginBottom: 100,
  },
});
