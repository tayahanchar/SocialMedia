
import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './UserStory.style';

interface IUserStory {
  userName: string
}
export const UserStory: FC<IUserStory> = ({ userName }) => {
  return (
    <View style={styles.story}>
      <View style={styles.imgWrapper} >
        <Image style={styles.img} source={require('../../assets/images/gray.jpeg')} />
      </View>
      <Text style={styles.imgText}>{userName}</Text>
    </View>

  );
};
