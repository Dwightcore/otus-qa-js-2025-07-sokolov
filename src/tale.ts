function kolobok(character: any) {
  const normalised = character.trim().toLowerCase()
  switch (normalised) {
    case 'дедушка':
      return 'Я от дедушки ушел'
    case 'заяц':
      return 'Я от зайца ушёл'
    case 'лиса':
      return 'Меня съели'
    default:
      return 'Незнакомец'
  }
}

const newYear = (name: unknown) => {
  const redactedName = name.trim()
  if (redactedName === 'Дед Мороз' || redactedName === 'Снегурочка') {
    return `${redactedName}! ${redactedName}! ${redactedName}!`
  }

  return 'Кто-то неизвестный'
}
