import {View, Text} from 'react-native'

export interface Props  { 
    children: React.ReactNode
 }

function PrimaryButton(props: Props) {
   return (
    <View>
        <Text>{props.children}</Text>
    </View>
   )
}

export default PrimaryButton