import { TextInput } from "react-native";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const InputWithIcon = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
      }}>
      <Icon name="user" size={20} color="black" style={{marginRight: 10}} />
      <TextInput placeholder="Enter your text" />
    </View>
  );
};

export default InputWithIcon;
