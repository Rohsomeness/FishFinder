import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const FindFishButton = props => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)


export default Button;
  