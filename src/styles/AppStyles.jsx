import { StyleSheet } from 'react-native';
import { fonts } from "../utils/fonts";

const colors = {
  primary: '#45484A',
  secondary: '#AEB5BB',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  black: '#000',
  gray: '#ccc',
};

const typography = {
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
  },
  body: {
    fontSize: 16,
    color: colors.dark,
  },
  label: {
    fontSize: 16,
    color: colors.dark,
  },
  ttitle: {    
    fontSize: 28,                    
    color: colors.primary,    
  },
  tsubtitle: {
    fontSize: 16,
    color: colors.secondary,    
  } ,
  tlogin: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.SemiBold,
  },
  tloginsignup: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,    
  },
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: colors.light,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.body.fontSize,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: spacing.small,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  header: {
    ...typography.header,
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  label: {
    ...typography.label,
    marginBottom: spacing.small,
  },
  textCenter: {
    textAlign: 'center',
  },
  
  //Welcome Screen Styles
  containerWelcome: {
    flex: 1,    
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 30,
    width: 140,
    marginVertical: 15,
  },
  bannerImage: {    
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    ...typography.ttitle,    
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: "center",    
    marginTop: 20,
  },  
  subTitle: {
    ...typography.tsubtitle,
    fontFamily: fonts.Medium,
    paddingHorizontal: 20,
    textAlign: "center",        
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },  
  //fix the style hierachy  
  loginButtonText: {
    ...typography.tlogin,
  },
  signupButtonText: {
     ...typography.tloginsignup,
  },

});

export { colors, typography, spacing, AppStyles };
