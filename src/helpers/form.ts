export const isEmailValid = (value: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return regex.test(value)
}

export const isBankAccountValid = (value: string): boolean => {
  const regex = /^[A-Za-z]{2}[0-9 ]+$/
  return regex.test(value)
}
