import React, { useEffect, useState } from 'react';
import { CountryCode, FlagSize, FlagStyle } from '@/models';
import { Text, View, Image, GestureResponderEvent, Pressable } from 'react-native';
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
  // @ts-ignore
  const { t } = useTranslation();
  // @ts-ignore
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
    <View>
      <Pressable onPress={onPress} style={{ margin: 5 }}>
        {showFallback || !flagSource ? (
          <Text style={{ color: flagLocale === locale ? Assets.colors.brand.cream : Assets.colors.brand.tertiary }}>
            {t(`language_name.${flagLocale}`, { lng: flagLocale })}
          </Text>
        ) : (
          <Image
            source={{ uri: flagSource }}
            style={{ width: parseInt(flagSize), height: parseInt(flagSize) }}
            onError={() => setShowFallback(true)} // show fallback on error
          />
        )}
      </Pressable>
    </View>
  );
};

export default Flag;
