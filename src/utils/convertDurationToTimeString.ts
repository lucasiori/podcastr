export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const timeString = [hours, minutes, seconds].map((unit) => {
    return String(unit).padStart(2, '0')
  }).join(':')

  return timeString
}