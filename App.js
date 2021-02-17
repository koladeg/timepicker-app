import React, { useState } from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(moment(date).format('MMMM Do YYYY, h:mm a'))
    hideDatePicker();
  };

  return (
      <View style={styles.container}>
        <Button style={styles.button} title="Show Date Picker" onPress={showDatePicker} />
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{fontSize: 30, color: 'blue',}}>{date}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            is24Hour={false}
        />
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  }
})