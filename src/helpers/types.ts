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

export interface ICardListProps {
  getTickets: (payload: ITicket[]) => { type: string; payload: ITicket[] };
  tickets: ITicket[];
  filters: Filters;
  activeTab: any;
}

export interface IFilterProps {
  filters: Filters;
  checkFunc: (type: string) => { type: string };
}

export interface CardProps {
  ticket: ITicket;
}

export interface ITabsProps {
  activeTab: any;
  setActiveTab: any;
}

export interface IState {
  filters: Filters;
  tickets: ITicket[];
  activeTab: any;
}
