
import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './UserStory.style';
import { StoryImg } from '../StoryImg/StoryImg';

interface IUserStory {
  userName: string
}
export const UserStory: FC<IUserStory> = ({ userName }) => {
  return (
    <View style={styles.story}>
      <StoryImg size={40} />
      <Text style={styles.imgText}>{userName}</Text>
    </View>

  );
};
