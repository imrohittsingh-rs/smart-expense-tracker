import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { images } from "@/constants/images";
import { colors, shadows } from "@/theme";

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        className="bg-surface"
      >
        <View className="min-h-full flex-1 items-center bg-surface px-6 py-4">
          <View className="mt-8 w-full flex-row items-center justify-center">
            <Image
              source={images.mascotLogo}
              className="mr-2 w-10 h-10"
              resizeMode="contain"
            />
            <Text className="font-poppins-semibold text-2xl text-text-primary">
              pennywise
            </Text>
          </View>

          <View className="mt-8 w-full max-w-[680px]">
            <Text className="text-center font-poppins-bold text-5xl text-text-primary leading-16 tracking-tight">
              Track Expenses.
              {"\n"}
              Split Bills. <Text className="text-penny-green">Together.</Text>
            </Text>
          </View>

          <Text className="type-body-md text-text-secondary mt-10 text-center">
            Manage your personal expenses, split group bills, and keep your
            finance simple - all in one place.
          </Text>

          <View className="relative mt-auto w-full max-w-[360px] items-center justify-center">
            <Image
              source={images.mascotWelcome}
              className="h-[290px] w-[360px]"
              resizeMode="contain"
            />

            <View
              className="absolute left-0 top-[8%] flex-row items-center rounded-2xl bg-white px-4 py-2.5"
              style={shadows.card}
            >
              <Ionicons
                name="scan-outline"
                size={18}
                color={colors.primary.pennyGreen}
                style={styles.badgeIcon}
              />
              <Text className="font-poppins-medium text-sm text-text-primary">
                Scan Receipts
              </Text>
            </View>

            <View
              className="absolute right-0 top-[32%] flex-row items-center rounded-2xl bg-white px-4 py-2.5"
              style={shadows.card}
            >
              <Ionicons
                name="people-outline"
                size={18}
                color={colors.primary.pennyGreen}
                style={styles.badgeIcon}
              />
              <Text className="font-poppins-medium text-sm text-text-primary">
                Split Bills
              </Text>
            </View>

            <View
              className="absolute bottom-[18%] left-0 flex-row items-center rounded-2xl bg-white px-4 py-2.5"
              style={shadows.card}
            >
              <Ionicons
                name="wallet-outline"
                size={18}
                color={colors.primary.pennyGreen}
                style={styles.badgeIcon}
              />
              <Text className="font-poppins-medium text-sm text-text-primary">
                Track Expenses
              </Text>
            </View>

            <View
              className="absolute bottom-[4%] right-0 flex-row items-center rounded-2xl bg-white px-4 py-2.5"
              style={shadows.card}
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={18}
                color={colors.primary.pennyGreen}
                style={styles.badgeIcon}
              />
              <Text className="font-poppins-medium text-sm text-text-primary">
                Stay in Controll
              </Text>
            </View>
          </View>

          <Link href="/" asChild>
            <TouchableOpacity
              className="mt-auto w-full max-w-[420px] flex-row items-center justify-evenly rounded-2xl bg-deep-green py-3"
              style={shadows.card}
              activeOpacity={0.85}
            >
              <Text className="font-poppins-medium text-2xl text-white">
                Get Started
              </Text>
              <View className="absolute right-0 mr-5">
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  badgeIcon: {
    marginRight: 8,
  },
});
