export default class AviasalesAPI {
  API_BASE_URL = 'https://front-test.beta.aviasales.ru/';

  API_ID_URL = 'search';

  API_SEARCH_TICKETS_URL = 'tickets?searchId=';

  async getResources(url: string) {
    const res = await fetch(`${this.API_BASE_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  }

  getSearchId() {
    return this.getResources(this.API_ID_URL);
  }

  getTickets(searchId: string) {
    return this.getResources(`${this.API_SEARCH_TICKETS_URL}${searchId}`);
  }
}
