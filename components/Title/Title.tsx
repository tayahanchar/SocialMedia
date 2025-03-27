import { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './Title.style';

interface ITitleProps {
  titleText: string
}

export const Title: FC<ITitleProps> = ({ titleText }) => {
  return (
    <Text style={styles.titleText}>{titleText}</Text>
  );
};
