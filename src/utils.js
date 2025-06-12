export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

// export function css(styles={}) {
//   const toString = key => `${key}: ${styles[key]}`
//   return Object.keys(styles).map(toString).join(';')
// }

// Деструктуризацию в аргументах функции map для лучшей читаемости
export function css(styles = {}) {
  if (typeof styles !== 'object' || styles === null) {
    return '';
  }
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');
}