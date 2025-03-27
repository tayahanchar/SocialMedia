import { Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './Header.style';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
  return (
    <View style={styles.header}>
      <Title titleText={'Let\'s Explore'} />
      <TouchableOpacity style={styles.icon}>
        <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
        <View style={styles.numberContainer}>
          <Text style={styles.number}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
