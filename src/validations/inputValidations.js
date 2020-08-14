export function emailValidator(email, setError) {
  if (!/^[a-zA-Z0-9$&+_-]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]{2,4}$/.test(email))
    setError("invalied user name");
  else setError("");
}

export function passwordValidator(password, setError) {
  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/.test(password))
    setError("invalied Password");
  else setError("");
}

export function nameValidator(name, setError) {
  if (!/^[A-Z][a-z]{3,}$/.test(name))
    setError("invalied Name");
  else setError("");
}
