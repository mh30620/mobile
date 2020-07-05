import React, {useEffect, useState} from 'react';
import { Animated, Easing, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';


export default function ProgressBar() {
    
    const [offsetX] = useState(new Animated.Value(-200));
    
    const translate = Animated.timing(offsetX, {
      toValue: 0,
      duration: 1000,
      easing: Easing.inOut(Easing.linear),
      useNativeDriver: true,
    });
    const reset = Animated.timing(offsetX, {
      toValue: -180,
      duration: 0,
      useNativeDriver: true,
    });
    const animation = Animated.sequence([translate, reset]);
    useEffect(() => {
      Animated.loop(animation).start();
  
      // Substituir esse setTimeout por uma chamada http ou qualquer outra chamada de serviço.
      setTimeout(() => {
        console.log('Chamar serviço');
      }, 4000);
    }, [animation]);
    const transform = {transform: [{translateX: offsetX}]};
    
    return (
      <SafeAreaView >
        <Animated.View style={styles.syncProgressBarContainer}>
          <Animated.View style={[transform, styles.syncProgressBar]} />
          <Animated.View style={[transform, styles.syncProgressBar]} />
          <Animated.View style={[transform, styles.syncProgressBar]} />
          <Animated.View style={[transform, styles.syncProgressBar]} />
        </Animated.View>
      </SafeAreaView>
    );
  };
  