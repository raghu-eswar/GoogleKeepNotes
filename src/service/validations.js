export function emailValidator(email, setError) {
  if (!/^[a-zA-Z0-9$&+_-]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]{2,4}$/.test(email))
    setError("invalied user name");
  else setError("");
}

export function passwordValidator(password, setError) {
  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/.test(password))
    setError("invalied password");
  else setError("");
}
