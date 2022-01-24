import { useEffect, useState, useRef, useReducer, useCallback } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { IoChevronDownSharp, IoCloseSharp } from 'react-icons/io5';
import * as S from './styles';
import { Container } from '../../components/Container/Index';
import Card from './Card/Index';
import api from '../../utils/api';
import type { Country } from '../../types/index';
import { State, Action, ActionTypes, Status } from './types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload.nameFilter,
      };
    case ActionTypes.CHANGE_REGION_FILTER:
      return {
        ...state,
        regionFilter: action.payload.regionFilter,
      };
    case ActionTypes.CHANGE_COUNTRIES:
      return {
        ...state,
        shownCountries: action.payload.shownCountries,
      };
    case ActionTypes.CHANGE_STATUS:
      return { ...state, status: action.payload.status };
    default:
      return { ...state };
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    nameFilter: '',
    regionFilter: '',
    status: Status.LOADING,
    shownCountries: [],
  });

  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const allCountries = useRef([] as Country[]);
  const regionFilterBtn = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<number>();
  const previousFilters = useRef({} as { name: string; region: string });

  const filterConditionally = useCallback(
    (country: Country) => {
      const regionFilter = state.regionFilter
        ? state.regionFilter === country.region
        : true;
      const nameFilter = state.nameFilter
        ? country.name.toLowerCase().includes(state.nameFilter.toLowerCase())
        : true;
      return regionFilter && nameFilter;
    },
    [state.nameFilter, state.regionFilter]
  );

  // const filterConditionally = (country: Country) => {
  //   const regionFilter = state.regionFilter
  //     ? state.regionFilter === country.region
  //     : true;
  //   const nameFilter = state.nameFilter
  //     ? country.name.toLowerCase().includes(state.nameFilter.toLowerCase())
  //     : true;
  //   return regionFilter && nameFilter;
  // };

  // const changeCountries = (newCountries: Country[]) =>
  //   dispatch({
  //     type: ACTIONS.CHANGE_COUNTRIES,
  //     payload: { ...state, shownCountries: newCountries },
  //   });

  const changeCountries = useCallback((newCountries: Country[]) => {
    dispatch({
      type: ActionTypes.CHANGE_COUNTRIES,
      payload: { shownCountries: newCountries },
    });
  }, []);

  useEffect(() => {
    if (allCountries.current.length) return;

    const getAllCountries = async () => {
      let status: Status;
      try {
        allCountries.current = await api.getAllCountries();
        status = Status.FETCHED;
        const randomOrderCountries = allCountries.current.sort(
          () => 0.5 - Math.random()
        );
        let selected = randomOrderCountries.slice(0, 8);
        changeCountries(selected);
      } catch (e) {
        status = Status.ERROR;
      }
      dispatch({
        type: ActionTypes.CHANGE_STATUS,
        payload: { status },
      });
    };

    getAllCountries();
  }, [changeCountries]);

  // useEffect(() => {
  //   console.log(!allCountries.current.length);
  //   if (state.shownCountries.length || !allCountries.current.length) return;
  //   // if (!allCountries.current.length) return;

  //   const randomOrderCountries = allCountries.current.sort(
  //     () => 0.5 - Math.random()
  //   );
  //   let selected = randomOrderCountries.slice(0, 8);
  //   changeCountries(selected);
  //   // dispatch({
  //   //   type: ACTIONS.CHANGE_COUNTRIES,
  //   //   payload: { ...state, countries: selected },
  //   // });
  // }, [changeCountries, filterConditionally, state.shownCountries]);

  // useEffect(() => {
  //   if (!allCountries.current.length) return;

  //   clearTimeout(timeoutId.current);
  //   const newCountries = allCountries.current
  //     .filter(filterConditionally)
  //     .slice(0, 8);

  //   timeoutId.current = window.setTimeout(() => {
  //     changeCountries(newCountries);
  //   }, 500);
  // }, [state.nameFilter, changeCountries, filterConditionally]);

  // useEffect(() => {
  //   if (!allCountries.current.length) return;

  //   const newCountries = allCountries.current
  //     .filter(filterConditionally)
  //     .slice(0, 8);

  //   changeCountries(newCountries);
  // }, [state.regionFilter, changeCountries, filterConditionally]);

  useEffect(() => {
    if (!allCountries.current.length) return;
    const { name: previousNameFilter, region: previousRegionFilter } =
      previousFilters.current;

    const newCountries = allCountries.current
      .filter(filterConditionally)
      .slice(0, 8);

    if (state.nameFilter !== previousNameFilter) {
      clearTimeout(timeoutId.current);
      timeoutId.current = window.setTimeout(() => {
        changeCountries(newCountries);
      }, 500);
    } else if (state.regionFilter !== previousRegionFilter) {
      changeCountries(newCountries);
    }
  }, [
    state.nameFilter,
    state.regionFilter,
    changeCountries,
    filterConditionally,
  ]);

  useEffect(() => {
    previousFilters.current = {
      name: state.nameFilter,
      region: state.regionFilter,
    };
  }, [state.nameFilter, state.regionFilter]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        regionFilterBtn.current &&
        !regionFilterBtn.current.contains(event.target)
      )
        setShowFilterOptions(false);
    }

    if (showFilterOptions) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    return undefined;
  }, [showFilterOptions]);

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.CHANGE_NAME_FILTER,
      payload: { nameFilter: e.target.value },
    });
  };

  const handleRegionFilterChange = (region: Country['region'] | '') => {
    dispatch({
      type: ActionTypes.CHANGE_REGION_FILTER,
      payload: { regionFilter: region },
    });
    setShowFilterOptions(false);
  };

  const handleShowFilterOptions = () => {
    setShowFilterOptions((oldValue) => !oldValue);
  };

  return (
    <Container padding='calc(1.6rem + 2.2vw) calc(6vw - 0.7rem)'>
      <S.ControlsContainer>
        <S.NameFilterContainer>
          <IoMdSearch
            size='20px'
            css='margin-inline: 3rem 2.4rem;'
            opacity='.3'
          />
          <S.Input value={state.nameFilter} onChange={handleNameFilterChange} />
        </S.NameFilterContainer>
        <S.RegionFilterContainer ref={regionFilterBtn}>
          <span css='display: flex; align-items: center;'>
            {state.regionFilter || 'Filter by Region'}
            {state.regionFilter && (
              <IoCloseSharp
                css='margin-left: .5rem;'
                onClick={() => handleRegionFilterChange('')}
                cursor='pointer'
              />
            )}
          </span>
          <IoChevronDownSharp
            onClick={handleShowFilterOptions}
            cursor='pointer'
          />
          <S.FilterOptionsContainer show={showFilterOptions}>
            <S.FilterOption onClick={() => handleRegionFilterChange('Africa')}>
              Africa
            </S.FilterOption>
            <S.FilterOption
              onClick={() => handleRegionFilterChange('Americas')}
            >
              Americas
            </S.FilterOption>
            <S.FilterOption onClick={() => handleRegionFilterChange('Asia')}>
              Asia
            </S.FilterOption>
            <S.FilterOption onClick={() => handleRegionFilterChange('Europe')}>
              Europe
            </S.FilterOption>
            <S.FilterOption onClick={() => handleRegionFilterChange('Oceania')}>
              Oceania
            </S.FilterOption>
          </S.FilterOptionsContainer>
        </S.RegionFilterContainer>
      </S.ControlsContainer>
      {(() => {
        switch (state.status) {
          case Status.LOADING:
            return <h1>Loading...</h1>;
          case Status.ERROR:
            return <h1>Error</h1>;
          case Status.FETCHED:
            return (
              <S.CardsContainer>
                {state.shownCountries.map(
                  ({ capital, name, flag, region, population }) => (
                    <Card
                      key={name}
                      name={name}
                      flag={flag}
                      data={[{ population }, { region }, { capital }]}
                    />
                  )
                )}
              </S.CardsContainer>
            );
        }
      })()}
    </Container>
  );
};

export default Main;
