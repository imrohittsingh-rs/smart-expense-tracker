import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="screen items-center justify-center px-6">
      <Text className="font-poppins-bold text-[32px] leading-[38px] text-penny-green">
        pennywise
      </Text>
      <Text className="type-body-md mt-2 text-center text-text-secondary">
        Smart spending for everyday life.
      </Text>
    </View>
  );
}
