import { StyleSheet } from 'react-native';

const colors = {
  primary: '#007BFF',
  secondary: '#6c757d',
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
});

export { colors, typography, spacing, AppStyles };
