import { HoldTheDate, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import React, { useEffect, useState } from 'react';
import { TalksProgram } from '@/api/types/talksProgram';
import {Text, TouchableOpacity, View, StyleSheet, Animated, Platform, Pressable} from 'react-native';
import {Assets} from "@/Assets";
import FlatList = Animated.FlatList;
import {SectionBox, SvgImage} from "@/UI";
import {BlurView} from "expo-blur";

const Program = () => {
  const [programs, setPrograms] = useState<TalksProgram>({ sessions: [] });
  const { t } = useTranslation();

  const allPrograms = fetchProgram();

  useEffect(() => {
    allPrograms
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => {
        console.error('Error fetching program:', error);
      });
  }, []);

  const toggleFavorite = () => {
    console.log('clicked')
  }

  const mockupData = [
    { id: '1', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: false },
    { id: '2', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: true },
    { id: '3', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: false },
    { id: '4', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: false },
    { id: '5', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: true },
    { id: '6', title: 'Demystifying GenAI: Building a ChatGPT App with Spring, LangChain4J, and Vector Store', author: 'Mary Grygleski', duration: '240 min', room: 'Workshop D', type: 'workshop', lang: 'English', isFavorite: false },
  ];

  return (
    <ScreenTemplate pageTitle={t('pageTitles.program')} shouldScrollToTop={true} dangerousOverride={true}>
      <View style={styles.container}>
        <View style={styles.menuContainer}>

          <View style={styles.topMenu}>
            <View style={styles.pyramidOuterBorder} />
            <View style={styles.pyramidOuterBackground} />
            <View style={styles.pyramidInnerBorder} />
            <View style={styles.pyramidInnerBackground} />

            <View style={styles.pyramidContent}>
              <Text style={styles.favoriteTitle}>FAVORITES</Text>
              <Text style={styles.favoriteSubtitle}>RĒS SELECTAE</Text>
            </View>
          </View>

          <View style={[styles.bottomMenu, Assets.styles.shadow]}>
            <View style={[styles.menuGroup, styles.dateMenuGroup]}>
              <Text style={styles.menuGroupLabel}>Date</Text>

              <View style={styles.menuGroupContent}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Sep 2</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>a.d. IV Non. Sept.</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Sep 3</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>a.d. III Non. Sept.</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Sep 4</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>prid. Non. Sept.</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Live</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>praesēns</Text>
                </View>
              </View>
            </View>

            <View style={[styles.menuGroup, styles.typeMenuGroup]}>
              <Text style={styles.menuGroupLabel}>Type</Text>

              <View style={styles.menuGroupContent}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Workshop</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>laboratorium</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Presentation</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>expositiō</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonTitle}>Lightning Talk</Text>
                  <View style={styles.buttonDivider}/>
                  <Text style={styles.buttonSubtitle}>orātiō brevis</Text>
                </View>
              </View>
            </View>

          </View>
        </View>

        <View style={styles.pillarContentContainer}>
          <View style={[styles.pillar, Assets.styles.shadow]}>
            <View style={styles.pillarLine}/>
            <View style={styles.pillarLine}/>
            <View style={styles.pillarLine}/>
          </View>

          <FlatList
              data={mockupData}
              renderItem={(item) =>
                  <BlurView
                    tint="light"
                    intensity={Platform.OS === 'web' ? 30 : 40}
                    experimentalBlurMethod={'dimezisBlurView'}
                    style={[cardStyles.container, Assets.styles.shadow]}>

                      <View style={cardStyles.horizontalSpaceBetween}>
                        <Text style={cardStyles.room}>{item.item.room}</Text>
                        <Text style={cardStyles.duration}>{item.item.duration}</Text>
                      </View>

                      <View style={cardStyles.horizontalSpaceBetween}>
                        <Text style={cardStyles.title}>{item.item.title}</Text>
                        <Pressable onPress={toggleFavorite}>
                          <SvgImage SVG={item.item.isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={40} width={40} />
                        </Pressable>
                      </View>

                      <Text style={cardStyles.type}>{item.item.lang}{' '}{item.item.type}</Text>
                      <View style={cardStyles.horizontalStart}>
                        <Text style={cardStyles.author}>{item.item.author}</Text>
                        <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} style={cardStyles.social} />
                      </View>

                  </BlurView>}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{margin: 10}}
              contentContainerStyle={styles.gallery}
          />

          <View style={[styles.pillar, Assets.styles.shadow]}>
            <View style={styles.pillarLine}/>
            <View style={styles.pillarLine}/>
            <View style={styles.pillarLine}/>
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 'auto',
  },
  title: {
    width: '75%',
    fontSize: 20,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  room: {
    fontSize: 16,
    fontFamily: 'Cinzel_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  duration: {
    fontSize: 16,
    fontFamily: 'Cinzel_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  type: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
    marginTop: 20,
  },
  author: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  social: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  horizontalStart: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  horizontalSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  }
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  menuContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    zIndex: 90,
  },
  topMenu: {
    width: '100%',
    height: 150,
    aspectRatio: 5, // controls height of triangle
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 20,
  },
  pyramidOuterBorder: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    //borderLeftWidth: 555,
    //borderRightWidth: 555,
    //borderBottomWidth: 101,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.lightBrown,
    borderStyle: 'solid',
    zIndex: 10,
  },
  pyramidOuterBackground: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 550,
    borderRightWidth: 550,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
    borderStyle: 'solid',
    zIndex: 20,
  },
  pyramidInnerBorder: {
    position: 'absolute',
    bottom: 5,
    width: 0,
    height: 0,
    borderLeftWidth: 500,
    borderRightWidth: 500,
    borderBottomWidth: 90,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    borderStyle: 'solid',
    zIndex: 30,
  },
  pyramidInnerBackground: {
    position: 'absolute',
    bottom: 6,
    width: 0,
    height: 0,
    borderLeftWidth: 491,
    borderRightWidth: 491,
    borderBottomWidth: 88,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
    borderStyle: 'solid',
    zIndex: 40,
  },
  pyramidContent: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    zIndex: 50,
  },
  favoriteTitle: {
    fontSize: 24,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
  favoriteSubtitle: {
    fontSize: 22,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    textTransform: 'uppercase',
  },
  bottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: 150,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    borderStyle: 'solid',
    //borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
    zIndex: 20,
  },
  menuGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 5,
  },
  dateMenuGroup: {
    maxWidth: '48%',
  },
  typeMenuGroup: {
    maxWidth: '51%',
  },
  menuGroupLabel: {
    width: '100%',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'PlayfairDisplay_400Regular',
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 5,
  },
  menuGroupContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  buttonTitle: {
    fontSize: 20,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    padding: 5,
  },
  buttonDivider: {
    borderTopWidth: 1,
    borderTopColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    width: '80%',
  },
  buttonSubtitle: {
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    paddingTop: 5,
  },
  pillarContentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: "center",
    flexDirection: 'row',
  },
  pillar: {
    width: 80,
    height: '100%',
    marginHorizontal: 10,
    padding: 5,
    borderStyle: 'solid',
    //borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  pillarLine: {
    width: 1,
    height: '100%',
    backgroundColor: Assets.colors.jz2025ThemeColors.sheetShadow
  },
  gallery: {
    gap: 10,
    marginTop: 10,
  },
})


export default Program;
