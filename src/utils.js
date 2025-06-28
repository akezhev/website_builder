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
  if (typeof styles === 'string') return styles;
  if (typeof styles !== 'object' || styles === null) {
    return '';
  }
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group mb-3">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group mb-3">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}