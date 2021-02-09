import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AviasalesAPI from '../../../helpers/AviasalesAPI';
import * as action from '../../../actions/searchId';
import classes from './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = ({ getTickets }: any) => {
  const aviasalesAPI = new AviasalesAPI();
  const [searchId, setSearchId] = useState('');
  const [stop, setStop] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      if (searchId === '') {
        aviasalesAPI.getSearchId().then(async (res) => setSearchId(res.searchId));
      } else if (!stop) {
        aviasalesAPI
          .getTickets(searchId)
          .then((res) => {
            setStop(res.stop);
            console.log(res.tickets, res.stop);
            getTickets(res.tickets);
          })
          .catch((error) => {
            console.log(error);
            if (!stop) {
              fetchData();
            }
          });
      }
    };
    fetchData();
  });

  // useEffect(
  //   () => {
  //     let stopFetching = false;
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetchTickets();
  //         const { tickets: newTickets, stop } = res;
  //         if (!stopFetching) addTickets(newTickets);
  //         if (stop) {
  //           setIsFetching(false);
  //           stopFetching = stop;
  //         }
  //       } catch (error) {
  //         if (!stopFetching) {
  //           setErrorMessage(error.message);
  //           timeOut.current = setTimeout(() => {
  //             setErrorMessage('');
  //           }, 2000);
  //         }
  //         // eslint-disable-next-line no-console
  //         console.log('error', error);
  //       }
  //       if (stopFetching) return;
  //       await fetchData();
  //     };
  //     fetchData();
  //     return () => {
  //       stopFetching = true;
  //       clearTimeout(timeOut.current);
  //     };
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [timeOut],
  // );

  return (
    <ul className={classes.cardList} style={{ listStyle: 'none', width: '100%', marginBottom: '20px' }}>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
      <li style={{ marginTop: '20px' }}>
        <Card />
      </li>
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  searchId: state.searchId,
});

export default connect(mapStateToProps, action)(CardList);
