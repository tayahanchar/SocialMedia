import { Image, View } from 'react-native';
import { styles } from './StoryImg.style';
import { FC } from 'react';

interface IStoryImgProps {
  size: number
}

export const StoryImg: FC<IStoryImgProps> = ({ size }) => {
  return (
    <View style={styles.imgWrapper} >
      <Image style={[styles.img, { width: size, height: size }]} source={require('../../assets/images/gray.jpeg')} />
    </View>
  );
};
