import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function App() {
  const [userList, setUserList] = useState();
  // useEffect(()=>{
  //   const userList = async() => {
  //     const res = await fetch('http://localhost:3000/users',{
  //       method:'GET',
  //     })
  //     console.log(res)
  //     // setUserList((prev) => {prev, res})
  //   }

  // },[])

  const User = async() =>{
    const res = await fetch('http://localhost:3333/users',{
        method:'GET',
      })
    const data = await res.json()
    setUserList(data.resultData[0].name)
    console.log(data.resultData)
  }

  return (
    // <View style={styles}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>안녕</Text>
    //   <Button title="ss" onPress={user}/>
    //   <StatusBar style="auto" />
    // </View>

    <View style={styles.container}>
      <Text>안녕</Text>

      <Pressable onPress={User}>
        <Text>
          버튼
        </Text>
      </Pressable>
      <Text>
        {userList}
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
