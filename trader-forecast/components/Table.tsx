import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import DayTradingResult from '@/models/TradingDayResult';


type Props = {
    data?: DayTradingResult[];
    onPress?: () => void;
}

export default function Table({data, onPress}: Props) {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title numeric>Iteration</DataTable.Title>
          <DataTable.Title numeric>Balance</DataTable.Title>
          <DataTable.Title numeric>Profit</DataTable.Title>
          <DataTable.Title numeric>Shares</DataTable.Title>
        </DataTable.Header>

        {data?.map((d, i) => {
          return (
          <DataTable.Row key={i.toString()}>
            <DataTable.Cell>{d.id}</DataTable.Cell>
            <DataTable.Cell>{d.balance}</DataTable.Cell>
            <DataTable.Cell numeric>{d.profit}</DataTable.Cell>
            <DataTable.Cell numeric>{d.sharesCount}</DataTable.Cell>
          </DataTable.Row>
          )
        })}
        
        
      </DataTable>
      {/* <Pressable onPress={onPress}>Go back</Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30
  },
  values: {
    textAlign: 'left'
  }
});