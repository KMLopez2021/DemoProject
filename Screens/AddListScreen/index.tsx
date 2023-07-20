import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../AddListScreen/styles';

import {AxiosInstance} from '../../Axios/custom';

const AddListScreen = () => {
  const [values, setValues] = useState({});

  const inputHandler = (name, valueData) => {
    setValues({
      ...values,
      [name]: valueData,
    });
  };

  const handleSave = navigation => {
    AxiosInstance.post('./products', values)
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        style={Styles.textinput}
        placeholder="Product Name"
        onChangeText={val => inputHandler('productName', val)}
      />
      <TextInput
        style={Styles.textinput}
        placeholder="Quantity"
        onChangeText={val => inputHandler('quantity', val)}
      />
      <TextInput
        style={Styles.textinput}
        placeholder="Price"
        onChangeText={val => inputHandler('price', val)}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          handleSave();
          // console.log(values);
        }}>
        <Text style={Styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddListScreen;
