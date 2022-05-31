export const getTimeString = (date: Date) => {
  return date.toLocaleDateString('pt-br', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
