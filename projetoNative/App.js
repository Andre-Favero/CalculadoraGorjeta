import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f9f9f9;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  color: #000000;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  background-color: #f1f1f1;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
`;

const CalcButton = styled.TouchableOpacity`
  width: 30%;
  height: 40px;
  margin-top: 20px;
  justify-content: center;
  border: 1px solid #d9d9d9;
`;

const TextButton = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: center;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
const ResultItem = styled.Text`
  color: #333;
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  margin: 20px;
  flex-direction: row;
`;

const PctItem = styled.Button`
  margin: 10px;
`;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip(nBill * (pct / 100));
    }
  };

  useEffect(() => {
    calc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pct]);

  return (
    <Page>
      <HeaderText>Titulo</HeaderText>
      <Input
        placeholder="Valor"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />

      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>

      <CalcButton onPress={calc}>
        <TextButton> Calcular {pct}%</TextButton>
      </CalcButton>
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {bill} </ResultItem>
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} ({pct}%){' '}
          </ResultItem>
          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill) + tip} </ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
