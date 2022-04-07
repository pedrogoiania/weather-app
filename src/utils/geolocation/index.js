import { Alert } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { openSettings } from 'react-native-permissions';

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
  title: 'Localização',
  message: 'Permissão de localização negada. Deseja habilitar a localização?',
  cancelButton: {
    text: 'Cancelar',
    style: 'cancel',
  },
  actionButton: {
    text: 'Ok',
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
  const resultPosition = async (position) => {
    console.log('position: ', position);

    return position;
  };

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
