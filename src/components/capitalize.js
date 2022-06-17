function capitalize(str) {
  const string = str;
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)

  return capitalizedString
}

export default capitalize