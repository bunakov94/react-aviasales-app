export interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
export interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
  id: string;
}

export type Filters = {
  [key: string]: { type: string; title: string; checked: boolean };
};

export enum FilterTypes {
  ALL = 'ALL',
  NOTHING = 'NOTHING',
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

export enum StopsCount {
  NOTHING = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export interface ICardListProps {
  setTickets: (payload: ITicket[]) => { type: string; payload: ITicket[] };
  tickets: ITicket[];
  filters: Filters;
  activeTab: { [key: string]: boolean };
}

export interface IFilterProps {
  filters: Filters;
  makeFilterActive: (type: string) => { type: string };
}

export interface CardProps {
  ticket: ITicket;
}

export interface ITabsProps {
  activeTab: { [key: string]: boolean };
  setActiveTab: (payload: { [key: string]: boolean }) => { type: string; payload: { [key: string]: boolean } };
}

export interface IState {
  filters: Filters;
  tickets: ITicket[];
  activeTab: { [key: string]: boolean };
}
