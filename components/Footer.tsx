import { SvgImage } from '@/UI';
import React, { Fragment } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions, Platform} from 'react-native';
import { Assets } from '@/Assets';
import { useTranslation } from 'react-i18next';

type FooterProps = {
  displayToTopArrow?: boolean;
  handleScrollToTop?: () => void;
};

const Footer: React.FC<FooterProps> = ({ displayToTopArrow, handleScrollToTop }) => {
  const { t } = useTranslation();
  const iconSize = Dimensions.get('window').width > 768 ? 35 : 26;

  return (
    <View style={styles.footer}>
      {displayToTopArrow && displayToTopArrow ? (
        <TouchableOpacity style={{ marginTop: 10 }} onPress={handleScrollToTop}>
          <SvgImage SVG={Assets.icons.ToTopArrow} height={20} />
        </TouchableOpacity>
      ) : (
        <Fragment />
      )}

      <SvgImage SVG={Assets.UI.DividerWide} height={10} style={{ paddingVertical: 20 }} />

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => Linking.openURL(Assets.links.javaBinHomePage)}>
          <Text style={styles.menuItem}>{t('javaBin.about')}</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <TouchableOpacity onPress={() => Linking.openURL(Assets.links.javaZoneFacebook)}>
            <SvgImage SVG={Assets.icons.FacebookFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(Assets.links.javaZoneTwitter)}>
            <SvgImage SVG={Assets.icons.TwitterFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(Assets.links.javaZoneLinkedIn)}>
            <SvgImage SVG={Assets.icons.LinkedInFrame} height={iconSize} width={iconSize} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => Linking.openURL(Assets.links.codeOfConduct)}>
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
    marginBottom: Platform.OS === 'web' ? 0 : 50,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 20,
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
