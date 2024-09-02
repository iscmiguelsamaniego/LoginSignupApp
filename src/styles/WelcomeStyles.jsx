import { StyleSheet } from "react-native";
import { colors, fonts } from './BaseStyles';
import { dimensions } from "./BaseStyles"; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    width: dimensions.fullWidth, // Use fullWidth from dimensions
    height: dimensions.fullHeight, // Use fullHeight from dimensions
  },
  logo: {
    height: 60,
    width: 200,
    marginVertical: 15,
  },
  bannerImage: {
    marginVertical: 10,
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 10,
  },
  buttonsInRowContainer: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Aligns buttons horizontally
    justifyContent: 'space-between', // Space between buttons
    width: '100%', // Width of the container
  },
  loginButton: {
    backgroundColor: colors.blue,
    width: '49%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    width: '49%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.ligthblue,
  },
  loginText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Bold, // Added fontFamily for consistency
  },
  registerText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fonts.Bold, // Added fontFamily for consistency
  },
  continueText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.orange,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    width: '95%',
    height: 50,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
  },
});

export default styles;
