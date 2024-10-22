import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputPage = ({ navigation }) => {
  const [tradingDays, setTradingDays] = useState('');
  const [targetProfit, setTargetProfit] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [costPerShare, setCostPerShare] = useState('');

  const handleExecute = () => {
    navigation.navigate('ResultPage', {
      tradingDays: parseInt(tradingDays),
      targetProfit: parseFloat(targetProfit),
      initialBalance: parseFloat(initialBalance),
      costPerShare: parseFloat(costPerShare),
    });
  };

  return (
    <View style={styles.container}>
      <Text>Number of Trading Days</Text>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        onChangeText={setTradingDays} 
        value={tradingDays} 
      />
      <Text>Target Profit Per Share</Text>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        onChangeText={setTargetProfit} 
        value={targetProfit} 
      />
      <Text>Initial Balance</Text>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        onChangeText={setInitialBalance} 
        value={initialBalance} 
      />
      <Text>Cost Per Share</Text>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        onChangeText={setCostPerShare} 
        value={costPerShare} 
      />
      <Button title="Execute" onPress={handleExecute} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default InputPage;
