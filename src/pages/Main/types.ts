import type { Country } from '../../types/index';

export type State = {
  nameFilter: string;
  regionFilter: string;
  shownCountries: Country[];
  status: Status;
};

export enum ActionTypes {
  CHANGE_NAME_FILTER = 'change-name-filter',
  CHANGE_REGION_FILTER = 'change-region-filter',
  CHANGE_COUNTRIES = 'change-countries',
  CHANGE_STATUS = 'change-status',
}

export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  FETCHED = 'fetched',
}

export type Action =
  | {
      type: ActionTypes.CHANGE_NAME_FILTER;
      payload: { nameFilter: State['nameFilter'] };
    }
  | {
      type: ActionTypes.CHANGE_REGION_FILTER;
      payload: { regionFilter: State['regionFilter'] };
    }
  | {
      type: ActionTypes.CHANGE_COUNTRIES;
      payload: { shownCountries: State['shownCountries'] };
    }
  | {
      type: ActionTypes.CHANGE_STATUS;
      payload: { status: State['status'] };
    };
