export const isEmailValid = (value: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return regex.test(value)
}

export const isBankAccountValid = (value: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  // const regex = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/
  const regex = /^[A-Za-z]{2}[0-9 ]+$/
  console.log(regex.test(value))
  return regex.test(value)
}
