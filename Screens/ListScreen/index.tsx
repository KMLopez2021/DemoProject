import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import {AxiosInstance} from '../../Axios/custom';
import ListProps from './types';
import Styles from './style';

const renderItem = ({item, index, navigation}) => {
  const handleDelete = id => {
    AxiosInstance.delete(`./products/${id}`);
  };

  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => navigation.navigate('Update List', {item})} // Pass the item as a parameter
    >
      <Text>{index}</Text>
      <Text style={Styles.item}>Product Name: {item.productName}</Text>
      <Text style={Styles.item}>Quantity: {item.quantity} pc/s</Text>
      <Text style={Styles.item}>Price: Php {item.price}</Text>
      <Button title="delete" onPress={() => handleDelete(item._id)} />
    </TouchableOpacity>
  );
};

const handleEmpty = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.item}> No data present!</Text>
    </View>
  );
};

const ListScreen: React.FC<ListProps> = props => {
  const {navigation, refresh} = props;
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    AxiosInstance.get('./products')
      .then(response => {
        console.log(response.data);
        setListData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(count);
  }, [count]);

  return (
    <View>
      <TouchableOpacity
        style={Styles.fab}
        onPress={() => {
          navigation.navigate('Add List');
        }}>
        <Text style={Styles.item}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.fab}
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text>resfresh</Text>
      </TouchableOpacity>
      {listData && (
        <FlatList
          data={listData}
          renderItem={({item, index}) => renderItem({item, index, navigation})} // Pass navigation to the renderItem function
          ListEmptyComponent={handleEmpty}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ListScreen;
