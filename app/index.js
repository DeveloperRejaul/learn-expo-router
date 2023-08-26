import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';


export default function Index() {

    const users = [
        {name:"rezaul"},
        {name:"kamal"},
    ]



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>

      {/* navigating anther screen   */}
      <Link href={"/home?name=Rezaul&age=20"}>Goto Home </Link>
      {/* way 02 */}
      <Link href={{ pathname: "/home", params:{name:"Rezaul", age:"20"}}}>Goto Home </Link>


      {/* Dynamic Route   */}
      <Link href={"/rejaul"}> Goto username</Link>
      <Link href={"/Kamal"}> Goto username</Link>

      {/* Example 02 */}
        {users.map((e,i)=>(
            <Link key={i} href={`/${e.name}`}>{e.name}</Link>
        ))}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:"center",alignItems:"center"
    },
    text:{fontSize:30, fontWeight:"bold"}
})