export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.username.length < 5) {
        errors.username = 'Must be at least 2 characters.';
      } else if (values.username.length > 16) {
        errors.username = 'Must be 15 characters or less.';
      }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    return errors;
};

