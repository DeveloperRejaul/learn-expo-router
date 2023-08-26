import { Text } from "react-native";

const { Stack, useRouter } = require("expo-router");

export default ()=>{

   const route = useRouter();

    return<Stack screenOptions={{headerTintColor:"red",headerStyle:{backgroundColor:"blue"}}}>
         <Stack.Screen name="index" options={{
            title:"Index Page", headerRight:()=><Text onPress={()=>route.push("/modal")}>Click</Text>
         }}/>
         <Stack.Screen name="modal" options={{presentation:"modal"}}/>
    </Stack>
}