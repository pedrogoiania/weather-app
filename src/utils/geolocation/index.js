import { Alert } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { openSettings } from 'react-native-permissions';

import strings from 'utils/strings';

const errorCodes = {
  INTERNAL_ERROR: '-1',
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
  PLAY_SERVICE_NOT_AVAILABLE: 4,
  SETTINGS_NOT_SATISFIED: 5,
};

const locationAuthorizationStatus = {
  DENIED: 'denied',
  DISABLED: 'disabled',
  GRANTED: 'granted',
  RESTRICTED: 'restricted',
};

const alertOptions = {
  title: strings.localizationAlertOptionsTitle,
  message: strings.localizationAlertOptionsMessage,
  cancelButton: {
    text: strings.localizationAlertOptionsCancelButton,
    style: 'cancel',
  },
  actionButton: {
    text: strings.localizationAlertOptionsActionButton,
    onPress: () => openSettings(),
  },
};

const requestAuthorization = async () => {
  try {
    const requestAuth = await Geolocation.requestAuthorization('whenInUse');

    if (requestAuth === locationAuthorizationStatus.DENIED) {
      Alert.alert(
        alertOptions.title,
        alertOptions.message,
        [
          alertOptions.cancelButton,
          alertOptions.actionButton,
        ],
      );
    }
    return requestAuth;
  } catch (error) {
    return error;
  }
};

const getCurrentLocation = async () => {
  const resultPosition = async (position) => position;

  const resultError = async (error) => {
    if (error.code === errorCodes.PERMISSION_DENIED) {
      requestAuthorization();
    }
    return error;
  };

  Geolocation.getCurrentPosition(
    resultPosition,
    resultError,
  );
};

export default {
  getCurrentLocation,
  requestAuthorization,
};
