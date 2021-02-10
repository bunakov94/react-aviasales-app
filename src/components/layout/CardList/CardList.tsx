import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import AviasalesAPI from '../../../helpers/AviasalesAPI';
import * as action from '../../../actions/tickets';
import { ITicket, ICardListProps, IState, Filters, FilterTypes } from '../../../helpers/types';
import classes from './CardList.module.scss';
import Card from '../../blocks/Card';

const CardList = ({ getTickets, tickets, filters, activeTab }: ICardListProps) => {
  const aviasalesAPI = new AviasalesAPI();
  const [searchId, setSearchId] = useState('');
  const [stopFetching, setStopFetching] = useState(false);
  const ticketsToShow = 5;

  useEffect(() => {
    const fetchData = () => {
      if (searchId === '') {
        aviasalesAPI.getSearchId().then((res) => setSearchId(res.searchId));
      } else if (!stopFetching) {
        aviasalesAPI
          .getTickets(searchId)
          .then((res) => {
            setStopFetching(res.stop);
            for (const ticket of res.tickets) {
              ticket.id = nanoid(6);
            }
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

  const sortTickets = (arr: ITicket[], fil: Filters, active: any) => {
    let result: ITicket[];
    if (active.cheap) {
      result = arr.sort((first: ITicket, second: ITicket) => (first.price > second.price ? 1 : -1));
    } else {
      result = arr.sort((first: ITicket, second: ITicket) => (first.price < second.price ? 1 : -1));
    }
    if (fil[FilterTypes.THREE].checked) {
      return result.filter((el) => el.segments[0].stops.length <= 3 && el.segments[1].stops.length <= 3);
    }
    if (fil[FilterTypes.TWO].checked) {
      return result.filter((el) => el.segments[0].stops.length <= 2 && el.segments[1].stops.length <= 2);
    }
    if (fil[FilterTypes.ONE].checked) {
      return result.filter((el) => el.segments[0].stops.length <= 1 && el.segments[1].stops.length <= 1);
    }
    if (fil[FilterTypes.NOTHING].checked) {
      return result.filter((el) => el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0);
    }
    return result;
  };

  const tik = sortTickets(tickets, filters, activeTab);

  return (
    <ul className={classes.cardList} style={{ listStyle: 'none', width: '100%', marginBottom: '20px' }}>
      {tik.slice(0, ticketsToShow).map((ticket: ITicket) => (
        <li key={ticket.id} style={{ marginTop: '20px' }}>
          <Card ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: IState) => ({
  tickets: state.tickets,
  filters: state.filters,
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, action)(CardList);
