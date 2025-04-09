import { Flag } from '@/components/index';
import { CountryCode, FlagSize, FlagStyle } from '@/models';
import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import { useI18nContext } from '@/contexts/I18nContext';

export const LanguagePicker: React.FC = () => {
  //@ts-ignore
  const { setLocale } = useI18nContext();

  return (
    <View style={styles.languagePickers} id={'languagePickers'}>
      <Flag
        flagLocale={'nb-NO'}
        countryCode={CountryCode.Norwegian}
        flagStyle={FlagStyle.Flat}
        flagSize={FlagSize.Small}
        onPress={async () => await setLocale('nb-NO')}
      />
      <Flag
        flagLocale={'en-US'}
        countryCode={CountryCode.British}
        flagStyle={FlagStyle.Flat}
        flagSize={FlagSize.Small}
        onPress={async () => await setLocale('en-US')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    languagePickers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});