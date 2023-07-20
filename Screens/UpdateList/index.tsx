import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Styles from './styles';

import {AxiosInstance} from '../../Axios/custom';
import UpdateListProps from './types';

const UpdateListScreen: React.FC<UpdateListProps> = props => {
  const {route} = props;
  const [values, setValues] = useState(route.params.item);

  const inputHandler = (name, valueData) => {
    setValues({
      ...values,
      [name]: valueData,
    });
  };

  const handleUpdate = () => {
    AxiosInstance.put(`./products/${values._id}`, {
      productName: values.productName,
      quantity: values.quantity,
      price: values.price,
    })
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error);
      });
    console.log(values);
  };

  return (
    <View>
      <TextInput
        style={Styles.textinput}
        placeholder="Product Name"
        value={values.productName}
        onChangeText={val => inputHandler('productName', val)}
      />
      <TextInput
        style={Styles.textinput}
        placeholder="Quantity"
        value={values.quantity}
        onChangeText={val => inputHandler('quantity', val)}
      />
      <TextInput
        style={Styles.textinput}
        placeholder="Price"
        value={values.price}
        onChangeText={val => inputHandler('price', val)}
      />
      <TouchableOpacity style={Styles.button} onPress={handleUpdate}>
        <Text style={Styles.text}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateListScreen;
