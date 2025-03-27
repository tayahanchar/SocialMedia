import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  imgWrapper: {
    borderWidth: 1.5,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  story: {
    marginTop: 15,
    marginRight: 10,
    width: 60,
    height: 70,
    gap: 5,
    alignItems: 'center',
  },

  imgText: {
    fontSize: 14,
    overflow: 'hidden',
    color: '#022150',
    fontFamily: 'Inter 18pt Black',
    fontWeight: 500,
  },
});
