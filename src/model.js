import image from './assets/image.png';

const text = `Если нужен сайт на JavaScript, оставь заявку: <a href="https://rutube.com" target="_blank">Tim Akezh</a>`

export const model = [
  {type: 'title', value: 'Website builder from JavaScript', options: {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(#751FB2, #3B6AB2)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }},

  {type: 'image', value: image, options: {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    }
  }},

  {type: 'columns', value: [
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принцыпы SOLID и ООП в JavaScript',
    'JavaScript - это просто, и интересно. Научись создавать любые UI своими руками',
  ], options: {
    styles: {
      background: 'linear-gradient( #3B6AB2, #4994B2)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }},

  {type: 'text', value: text, options: {
    styles: {
      background: 'linear-gradient(#4994B2, #751FB2)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }},

];