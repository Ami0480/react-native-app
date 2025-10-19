import {
  StyleSheet,
  Appearance,
  Platform,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/theme";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separateComp = <View style={styles.separator} />;

  //const headerComp = <Text>Top of List</Text>;
  const footerComp = <Text style={{ marginTop: 10 }}>End of Menu</Text>;

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separateComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemText, styles.menuItemTitle]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 10,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      alignSelf: "center",
      marginTop: 10,
      marginBottom: 10,
    },
    footerComp: { alignSelf: "center" },
    row: {
      flexDirection: "row",
      width: "90%",
      maxWidth: 600,
      height: 100,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      alignSelf: "center",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
      marginTop: 5,
    },
    menuItemText: { color: theme.text, marginTop: 5 },
    menuImage: { width: 100, height: 100 },
  });
}
