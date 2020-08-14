export function emailValidator(email) {
  return /^[a-zA-Z0-9$&+_-]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]{2,4}$/.test(email)
}

export function passwordValidator(password) {
  return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/.test(password)
}

export function nameValidator(name) {
  return /^[A-Z][a-z]{3,}$/.test(name)
}
