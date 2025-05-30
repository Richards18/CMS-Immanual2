import React, { useEffect, useState } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import NewsViewer from '../../Viewer/News/NewsViewer';
import axios from 'axios';

const NewsController: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newsList, setNewsList] = useState<{ title: string, details: string, status: string, image: any, date: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    fetchTodaysNewsList();
  }, []);

  const fetchTodaysNewsList = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        ' http://cmsimmanuelchurch.com/manageNewsOrEvent.php',
        { action: 'NewsList' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const members = response?.data || [];
      // console.log('members', JSON.stringify(response));

      const formatted = members.map((member: any) => ({
        title: member.contentTitle,
        details: member.contentDetails,
        status: member.contentPublishStatus,
        image: member.contentImage,
        date: member.contentActualDate
      }));

    // console.log('for', JSON.stringify(formatted))

      setNewsList(formatted);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return <NewsViewer navigation={navigation} newsList={newsList}/>;
};
export default NewsController;
