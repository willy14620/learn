import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { ReactComponent as DayThunderstorm } from './weather-app-images/day-thunderstorm.svg';
import { ReactComponent as DayClear } from './weather-app-images/day-clear.svg';
import { ReactComponent as DayCloudyFog } from './weather-app-images/day-cloudy-fog.svg';
import { ReactComponent as DayCloudy } from './weather-app-images/day-cloudy.svg';
import { ReactComponent as DayFog } from './weather-app-images/day-fog.svg';
import { ReactComponent as DayPartiallyClearWithRain } from './weather-app-images/day-partially-clear-with-rain.svg';
import { ReactComponent as DaySnowing } from './weather-app-images/day-snowing.svg';
import { ReactComponent as NightThunderstorm } from './weather-app-images/night-thunderstorm.svg';
import { ReactComponent as NightClear } from './weather-app-images/night-clear.svg';
import { ReactComponent as NightCloudyFog } from './weather-app-images/night-cloudy-fog.svg';
import { ReactComponent as NightCloudy } from './weather-app-images/night-cloudy.svg';
import { ReactComponent as NightFog } from './weather-app-images/night-fog.svg';
import { ReactComponent as NightPartiallyClearWithRain } from './weather-app-images/night-partially-clear-with-rain.svg';
import { ReactComponent as NightSnowing } from './weather-app-images/night-snowing.svg';

const weatherTypes = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [
        8, 9, 10, 11, 12,
        13, 14, 19, 20, 29, 30,
        31, 32, 38, 39,
    ],
    isSnowing: [23, 37, 42],
};

const weatherIcons = {
    day: {
      isThunderstorm: <DayThunderstorm />,
      isClear: <DayClear />,
      isCloudyFog: <DayCloudyFog />,
      isCloudy: <DayCloudy />,
      isFog: <DayFog />,
      isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
      isSnowing: <DaySnowing />,
    },
    night: {
      isThunderstorm: <NightThunderstorm />,
      isClear: <NightClear />,
      isCloudyFog: <NightCloudyFog />,
      isCloudy: <NightCloudy />,
      isFog: <NightFog />,
      isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
      isSnowing: <NightSnowing />,
    },
};

const IconContainer = styled.div`
    flex-basis: 30%;

    svg {
        max-height: 110px;
    }
`;

// 透過天氣代碼取得相應的天氣型態
const weatherCode2Type = (weatherCode) => {
    // Object.entires 會將物件轉為陣列回傳
    // 透過 find 尋找後解構取值
    const [weatherType] = Object.entries(weatherTypes).find(([weatherType, weatherCodes]) => weatherCodes.includes(Number(weatherCode))) || [];
    return weatherType;
};

const WeatherIcon = ({currentWeatherCode, moment}) => {
  
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear');
  
    const theWeatherIcon = useMemo(() => weatherCode2Type(currentWeatherCode), [currentWeatherCode]);

    useEffect(()=>{
        setCurrentWeatherIcon(theWeatherIcon);
    }, [theWeatherIcon]);

    return (
    <IconContainer>
        {weatherIcons[moment][currentWeatherIcon]}
    </IconContainer>
  );
};

export default WeatherIcon;