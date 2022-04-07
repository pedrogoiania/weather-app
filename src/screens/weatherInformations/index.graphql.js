import gql from 'graphql-tag';

export const GET_WEATHER_BY_GEOLOCATION = gql`
  query getWeatherByGeoLocation($coordinates: Coordinates!){
            getWeatherByGeoLocation(coordinates: $coordinates) {
                main
                description
                temp
                feelsLike
                tempMin
                tempMax
                location
            }
        }
`;
