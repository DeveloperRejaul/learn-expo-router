import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { Stack, useRouter, useSearchParams } from 'expo-router';


export default function Home() {
const router = useRouter();
const  params = useSearchParams()


  return (
    <View>
        {/* access stack */}
    <Stack screenOptions={{title:"Home"}}/>
      <Text>Home</Text>
      <Text>Name: {params.name}</Text>
      <Text>Age: {params.age}</Text>
      <Button onPress={()=>router.back()} title='Go back'/>
    </View>
  )
}

const styles = StyleSheet.create({})