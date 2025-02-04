import SvgImage from '@/UI/SvgImage';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {Assets} from '@/Assets';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerDivider}>
        <SvgImage SVG={Assets.UI.DividerWide} height={8} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Text style={styles.menuItem}>About Javabin</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/javazoneconference')}>
            <SvgImage SVG={Assets.icons.FacebookFrame} height={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/javazone')}>
            <SvgImage SVG={Assets.icons.TwitterFrame} height={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/javazone/')}>
            <SvgImage SVG={Assets.icons.LinkedInFrame} height={35} />
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
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  footerDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 19,
    marginBottom: 20,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    gap: 10,
  },
});

export default Footer;
