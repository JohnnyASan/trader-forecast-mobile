import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DayTradingForecaster from '@/services/forecaster';
import Table from '@/components/Table';

const InputPage = () => {
  const [tradingDays, setTradingDays] = useState('');
  const [targetProfit, setTargetProfit] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [costPerShare, setCostPerShare] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState<DayTradingForecaster>();

  return (
    <View style={styles.container}>
        {showTable ? (<Table data={data?.results}  />) :
      (
      <><Text>Number of Trading Days</Text>
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
        <Button title="Execute" onPress={() => {
            setData(new DayTradingForecaster(parseFloat(targetProfit), parseFloat(costPerShare), parseFloat(initialBalance), parseInt(tradingDays)));
            setShowTable(true);
          }} /></>)
        }
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
