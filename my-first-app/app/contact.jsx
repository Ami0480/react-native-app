import { Image } from "expo-image";
import { StyleSheet, View, Linking } from "react-native";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ContactImg from "@/assets/images/contact.jpg";
import { Fonts } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "transparent", dark: "transparent" }}
      style={{ backgroundColor: "transparent" }}
    >
      <View>
        <Image source={ContactImg} style={{ width: "100%", height: 200 }} />
      </View>
      <ThemedView>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Coffee Shop
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="defaultSemiBold">222 Coffee St, Perth</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="defaultSemiBold">Phone:</ThemedText>
        <ThemedText
          type="defaultSemiBold"
          style={{ textDecorationLine: "underline" }}
          onPress={() => Linking.openURL("tel:22-222-222")}
        >
          22-222-222
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="defaultSemiBold">Email:</ThemedText>
        <ThemedText
          type="defaultSemiBold"
          style={{ textDecorationLine: "underline" }}
          onPress={() => Linking.openURL("mailto:coffeeshop@gmail.com")}
        >
          coffeeshop@gmail.com
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="defaultSemiBold">Hours:</ThemedText>
        <ThemedText type="defaultSemiBold">Open 7 days 6:00 - 15:00</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
