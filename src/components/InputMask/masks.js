export function cpfMask(event) {
  event.currentTarget.maxLength = 14;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')  
  event.currentTarget.value = value;
  return event;
}

export function dateMask(event) {
  event.currentTarget.maxLength = 10;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 2 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  event.currentTarget.value = value;
  return event;
}