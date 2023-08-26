import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router'

export default function username() {
   const {username}  = useSearchParams()

  return (
    <View>
        {/* Stack configure  */}
    <Stack.Screen options={{title:username}}/>
      <Text>username (@{username})</Text>
    </View>
  )
}

const styles = StyleSheet.create({})