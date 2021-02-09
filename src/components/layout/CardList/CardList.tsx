import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AviasalesAPI from '../../../helpers/AviasalesAPI';
import * as action from '../../../actions/tickets';
import { ITicket, ICardListProps } from '../../../helpers/types';
import classes from './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = ({ getTickets, tickets }: ICardListProps) => {
  const aviasalesAPI = new AviasalesAPI();
  const [searchId, setSearchId] = useState('');
  const [stopFetching, setStopFetching] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      if (searchId === '') {
        aviasalesAPI.getSearchId().then(async (res) => setSearchId(res.searchId));
      } else if (!stopFetching) {
        aviasalesAPI
          .getTickets(searchId)
          .then((res) => {
            setStopFetching(res.stop);
            getTickets(res.tickets);
          })
          .catch(() => {
            if (!stopFetching) {
              fetchData();
            }
          });
      }
    };
    fetchData();
  });

  return (
    <ul className={classes.cardList} style={{ listStyle: 'none', width: '100%', marginBottom: '20px' }}>
      {tickets.slice(0, 5).map((ticket: ITicket) => (
        <li key={`${ticket.segments[0].date}${Math.random()}${Math.random()}`} style={{ marginTop: '20px' }}>
          <Card ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: { tickets: ITicket[] }) => ({
  tickets: state.tickets,
});

export default connect(mapStateToProps, action)(CardList);
