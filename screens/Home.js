import React, {useState, useEffect, useContext, useNavigation} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

import { Block, theme } from 'galio-framework';
import { argonTheme } from "../constants/";
import { Button as GaButton} from "galio-framework";
import { Card } from '../components';
import articles from '../constants/articles';
import PresetsContext from '../context/PresetsContext';
const { width } = Dimensions.get('screen');

function Home(props) {
  // renderArticles = () => {
  //   return (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={styles.articles}>
  //       <Block flex>
  //         <Card item={articles[0]} horizontal  />
  //         <Block flex row>
  //           <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
  //           <Card item={articles[2]} />
  //         </Block>
  //         <Card item={articles[3]} horizontal />
  //         <Card item={articles[4]} full />
  //       </Block>
  //     </ScrollView>
  //   )
  // }
  const {presets, updatePresets} = useContext(PresetsContext);
  const navigation = useNavigation();
  
  renderSavedPresets = () => {
    if (!presets.length) {
      return null;
    } else {
      presets.map((preset) => {
        return (
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Block style={styles.rows}>
              <TouchableOpacity onPress={() => navigation.navigate("Pro")}>
                <Block row middle space="between" style={{ paddingTop: 7 }}>
                  <Text size={14}>{preset.title}</Text>
                  <Icon
                    name="chevron-right"
                    family="entypo"
                    style={{ paddingRight: 5 }}
                  />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        )
      })
    }
  };


  return (
    <Block flex center style={styles.home}>
      <GaButton
        round
        onlyIcon
        shadowless
        icon="plus"
        iconFamily="Font-Awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 1.625}
        color={argonTheme.COLORS.PRIMARY}
        style={[styles.social, styles.shadow]}
      />
      {renderSavedPresets}
      <GaButton
        round
        onlyIcon
        shadowless
        icon="plus"
        iconFamily="Font-Awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 1.625}
        color={argonTheme.COLORS.ACTIVE}
        style={[styles.social, styles.shadow, {position: 'absolute', bottom:10, right:10}]}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default withNavigation(Home);
