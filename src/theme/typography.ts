export const fontFamilies = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
} as const;

export const typography = {
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "700",
    letterSpacing: -0.4,
  },
  h2: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "600",
  },
  h3: {
    fontFamily: fontFamilies.semiBold,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "600",
  },
  h4: {
    fontFamily: fontFamilies.medium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
  bodyLarge: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
  },
  bodyMedium: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
  },
  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "400",
  },
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "400",
  },
} as const;
