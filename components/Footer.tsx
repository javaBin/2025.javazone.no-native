import { SvgImage } from '@/UI';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions} from 'react-native';
import { Assets } from '@/Assets';
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const iconSize = Dimensions.get('window').width > 768 ? 35 : 26;

  return (
    <View style={styles.footer}>
      <SvgImage SVG={Assets.UI.DividerWide} height={10} style={{paddingVertical: 20}} />

      <View style={styles.menu}>
        <TouchableOpacity>
          <Text style={styles.menuItem}>{t('javaBin.about')}</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/javazoneconference')}>
            <SvgImage SVG={Assets.icons.FacebookFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/javazone')}>
            <SvgImage SVG={Assets.icons.TwitterFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/javazone/')}>
            <SvgImage SVG={Assets.icons.LinkedInFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.menuItem}>Code of Conduct</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 20
  },
  menuItem: {
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.footerGrey,
    marginHorizontal: Dimensions.get('window').width > 768 ? 10 : 5,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    gap: 10,
  },
});

export default Footer;
