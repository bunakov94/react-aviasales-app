import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import Spiner from '../../blocks/Loader';
import AviasalesAPI from '../../../helpers/AviasalesAPI';
import * as action from '../../../actions/tickets';
import { ITicket, ICardListProps, IState, Filters, FilterTypes } from '../../../helpers/types';
import classes from './TicketsList.module.scss';
import Card from '../../blocks/Ticket';

const CardList = ({ getTickets, tickets, filters, activeTab }: ICardListProps) => {
  const aviasalesAPI = useMemo(() => new AviasalesAPI(), []);
  const [isLoading, setIsLoading] = useState(false);
  const ticketsToShow = 5;
  const [showCount, setShowCount] = useState(ticketsToShow);

  useEffect(() => {
    let stopFetch = false;
    let searchId: string;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        if (searchId === undefined) {
          const res = await aviasalesAPI.getSearchId();
          searchId = res.searchId;
        }
        const partOfTickets = await aviasalesAPI.getTickets(searchId);
        for (const ticket of partOfTickets.tickets) {
          ticket.id = nanoid(6);
        }
        if (!stopFetch) getTickets(partOfTickets.tickets);
        if (partOfTickets.stop) {
          stopFetch = partOfTickets.stop;
          setIsLoading(false);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);
      }
      if (stopFetch) return;
      await fetchData();
    };
    fetchData();
  }, [aviasalesAPI, getTickets]);

  const makeTicketsList = (
    ticketsArr: ITicket[],
    filtersList: Filters,
    currentActiveTab: { [key: string]: boolean },
  ) => {
    const ticketsList = [...ticketsArr];

    if (currentActiveTab.cheap) {
      ticketsList.sort((first: ITicket, second: ITicket) => first.price - second.price);
    } else {
      ticketsList.sort(
        (first: ITicket, second: ITicket) =>
          first.segments[0].duration +
          first.segments[1].duration -
          (second.segments[0].duration + second.segments[1].duration),
      );
    }

    if (filtersList[FilterTypes.ALL].checked) {
      return ticketsList;
    }

    return ticketsList.filter(
      (ticket) =>
        ((filtersList[FilterTypes.THREE].checked && ticket.segments[0].stops.length === 3) ||
          (filtersList[FilterTypes.TWO].checked && ticket.segments[0].stops.length === 2) ||
          (filtersList[FilterTypes.ONE].checked && ticket.segments[0].stops.length === 1) ||
          (filtersList[FilterTypes.NOTHING].checked && ticket.segments[0].stops.length === 0)) &&
        ((filtersList[FilterTypes.THREE].checked && ticket.segments[1].stops.length === 3) ||
          (filtersList[FilterTypes.TWO].checked && ticket.segments[1].stops.length === 2) ||
          (filtersList[FilterTypes.ONE].checked && ticket.segments[1].stops.length === 1) ||
          (filtersList[FilterTypes.NOTHING].checked && ticket.segments[1].stops.length === 0)),
    );
  };

  const ticketsList = makeTicketsList(tickets, filters, activeTab);

  return (
    <>
      {ticketsList.length ? (
        <ul className={classes.cardList} style={{ listStyle: 'none', width: '100%', marginBottom: '20px' }}>
          {isLoading && <Spiner />}
          {ticketsList.slice(0, showCount).map((ticket: ITicket) => (
            <li key={ticket.id} style={{ marginTop: '20px' }}>
              <Card ticket={ticket} />
            </li>
          ))}
          {ticketsList.length > ticketsToShow && (
            <button type="button" className={classes.showMore} onClick={() => setShowCount(showCount + ticketsToShow)}>
              Показать еще
            </button>
          )}
        </ul>
      ) : (
        <h4 className={classes.empty}>Рейсов, подходящих под заданные фильтры, не найдено</h4>
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  tickets: state.tickets,
  filters: state.filters,
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, action)(CardList);
