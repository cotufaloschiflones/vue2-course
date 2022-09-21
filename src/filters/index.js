export const capitalize = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const uppercase = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
}

export const currency = (value) => {
  if (!value) return ''
  value = value.toString()
  return `${value} €`
}