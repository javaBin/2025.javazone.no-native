import React, { useEffect, useState } from 'react';
import { CountryCode, FlagSize, FlagStyle } from '@/models';
import {Text, Image, GestureResponderEvent, Pressable, StyleSheet, Dimensions} from 'react-native';
import { useI18nContext } from '@/contexts/I18nContext';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';

interface FlagProps {
  flagLocale: string;
  countryCode: CountryCode;
  flagStyle: FlagStyle;
  flagSize: FlagSize;
  onPress: (event: GestureResponderEvent) => void;
}

const Flag: React.FC<FlagProps> = ({ flagLocale, countryCode, flagStyle, flagSize, onPress }: FlagProps) => {
  //@ts-ignore
  const { t } = useTranslation();
  //@ts-ignore
  const { locale } = useI18nContext();
  const [flagSource, setFlagSource] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    loadFlag();
  }, []);

  const loadFlag = () => {
    try {
      const endpoint = `https://flagsapi.com/${countryCode}/${flagStyle}/${flagSize}.png`;
      setFlagSource(endpoint);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <Pressable onPress={onPress} style={{ margin: 10 }}>
        {showFallback || !flagSource ? (
          <Text style={[styles.text, flagLocale === locale ? styles.activeText : styles.inactiveText]}>
            {t(`language_name.${flagLocale}`, { lng: flagLocale })}
          </Text>
        ) : (
          <Image
            source={{ uri: flagSource }}
            style={{ width: parseInt(flagSize), height: parseInt(flagSize) * 0.6 }}
            onError={() => setShowFallback(true)} // show fallback on error
          />
        )}
      </Pressable>
  );
};

export default Flag;

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
    fontFamily: 'PlayfairDisplay_400Regular',
    textAlign: 'justify',
  },
  activeText: {
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  inactiveText: {
    color: Assets.colors.jz2025ThemeColors.lightBrown,
  },
})