import React from 'react';
import { SvgXml } from 'react-native-svg';

import clearNight from './clear-night.svg';
import clear from './clear.svg';
import cloudyClearNight from './cloudy-clear-night.svg';
import cloudyClear from './cloudy-clear.svg';
import cloudy from './cloudy.svg';
import partyCloudyNight from './party-cloudy-night.svg';
import partyCloudy from './party-cloudy.svg';

const ClearNight = () => <SvgXml width="155" height="155" xml={clearNight} />;
const Clear = () => <SvgXml width="155" height="155" xml={clear} />;
const CloudyClearNight = () => <SvgXml width="155" height="155" xml={cloudyClearNight} />;
const CloudyClear = () => <SvgXml width="155" height="155" xml={cloudyClear} />;
const Cloudy = () => <SvgXml width="155" height="155" xml={cloudy} />;
const PartyCloudyNight = () => <SvgXml width="155" height="155" xml={partyCloudyNight} />;
const PartyCloudy = () => <SvgXml width="155" height="155" xml={partyCloudy} />;

export default {
  ClearNight,
  Clear,
  CloudyClearNight,
  CloudyClear,
  Cloudy,
  PartyCloudyNight,
  PartyCloudy,
};
