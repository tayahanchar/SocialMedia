import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },

  number: {
    position: 'relative',
    fontFamily: 'Inter 18pt Black',
    color: 'white',
    fontSize: 8,
  },

  numberContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#F35BAC',
    width: 12,
    height: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
