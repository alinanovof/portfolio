export interface ThemeType {
  primary: string;
  primaryHover: string;
  secondary: string;
  background: string;
  secondaryBackground: string;
  text: string;
  secondaryText: string;
  border: string;
  shadow: string;
  success: string;
  error: string;
  transition: string;
}

export const lightTheme: ThemeType = {
  primary: "#5E6AD2",
  primaryHover: "#4A59C2",
  secondary: "#FFD166",
  background: "#FFFFFF",
  secondaryBackground: "#F6F8FA",
  text: "#222222",
  secondaryText: "#666666",
  border: "#EEEEEE",
  shadow: "rgba(0, 0, 0, 0.05)",
  success: "#06D6A0",
  error: "#EF476F",
  transition: "0.3s ease-in-out",
};

export const darkTheme: ThemeType = {
  primary: "#7B83E1",
  primaryHover: "#5E6AD2",
  secondary: "#FFD166",
  background: "#121212",
  secondaryBackground: "#1E1E1E",
  text: "#F5F5F5",
  secondaryText: "#BBBBBB",
  border: "#333333",
  shadow: "rgba(0, 0, 0, 0.3)",
  success: "#06D6A0",
  error: "#EF476F",
  transition: "0.3s ease-in-out",
};
