import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'collumn',
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: '#F1F6F9',
    borderWidth: 1,
    padding: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  item: {
    fontSize: 32,
  },
  fab: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    top: 25,
    width: 70,
    bottom: 50,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});

export default Styles;
