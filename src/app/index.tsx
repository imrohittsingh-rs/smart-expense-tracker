import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="screen items-center justify-center bg-white px-6">
      <Text className="font-poppins-bold text-[32px] leading-[38px] text-[#0d132b]">
        pennywise
      </Text>
      <Text className="type-body-md mt-2 text-center text-text-secondary">
        Smart spending for everyday life.
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-8 rounded-full bg-[#1fa866] px-6 py-3">
          <Text className="font-poppins-semibold text-base text-white">Open onboarding</Text>
        </Pressable>
      </Link>
    </View>
  );
}
