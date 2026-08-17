import { useColorScheme as useRNColorScheme } from "react-native";

export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  return colorScheme === "dark" ? "dark" : "light";
}
