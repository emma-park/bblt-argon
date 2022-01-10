import React, {useState, useEffect, useContext, useNavigation} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

import { Block, theme } from 'galio-framework';
import { argonTheme } from "../constants";
import { Button as GaButton} from "galio-framework";
import { Card } from '../components';
import articles from '../constants/articles';
import PresetsContext from '../context/PresetsContext';
const { width } = Dimensions.get('screen');

function BrewSetup(props) {
  const {presets, updatePresets} = useContext(PresetsContext);
  const navigation = useNavigation();

  renderButtons = () => {
    
  }

  return (
    <Block flex center style={styles.BrewSetup}>
      {renderButtons}
    </Block>
  );
}

const styles = StyleSheet.create({
  brewSetup: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default withNavigation(Home);
