import React from 'react';
import { SvgXml } from 'react-native-svg';

import locationActive from './location-active.svg';
import locationInactive from './location-inactive.svg';
import settingsActive from './settings-active.svg';
import settingsInactive from './settings-inactive.svg';

const LocationActive = () => <SvgXml width="24" height="24" xml={locationActive} />;
const LocationInactive = () => <SvgXml width="24" height="24" xml={locationInactive} />;
const SettingsActive = () => <SvgXml width="24" height="24" xml={settingsActive} />;
const SettingsInactive = () => <SvgXml width="24" height="24" xml={settingsInactive} />;

export default {
  LocationActive,
  LocationInactive,
  SettingsActive,
  SettingsInactive,
};
