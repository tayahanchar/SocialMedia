import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { UserStory } from '../UserStory/UserStory';

interface IUserProps {
  username: string;
  id: number;
  // другие поля, если есть
}

export const UserStories = () => {

  const [users, setUsers] = useState<IUserProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: IUserProps[] = await response.json();
      setUsers(data);
    })();
  }, []);

  return (
    <View>
      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} keyExtractor={(item) => String(item.id)} data={users} renderItem={({ item }) => <UserStory userName={item.username} />} />
    </View>
  );
};
