import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { UserStory } from '../UserStory/UserStory';

interface IUserProps {
  username: string;
  id: number;
}

export const UserStories = () => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [renderedUsers, setRenderedUsers] = useState<IUserProps[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const size = 5;

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: IUserProps[] = await response.json();
      setUsers(data);
      setRenderedUsers(getUsers(data, size, page));
      setPage(prev => prev + 1);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = (data: IUserProps[], pageSize: number, pageNumber: number) => {
    return data.slice(pageSize * pageNumber, (pageSize * pageNumber) + pageSize);
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={renderedUsers}
        renderItem={({ item }) => <UserStory key={item.id} userName={item.username} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoading) { return; }
          setIsLoading(true);
          const newData = getUsers(users, size, page);
          if (newData.length) {
            setRenderedUsers(prev => [...prev, ...newData]);
            setPage(prev => prev + 1);
          }
          setIsLoading(false);
        }}
      />
    </View>
  );
};
