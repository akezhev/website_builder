import image from './assets/image-2.jpg';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks';

const text = `Если нужен сайт на JavaScript, оставь заявку: <a href="https://rutube.com" target="_blank">Tim Akezh</a>`

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(#751FB2, #3B6AB2)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '1000px',
      height: 'auto'
    },
    alt: 'this is picture'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принцыпы SOLID и ООП в JavaScript',
    'JavaScript - это просто, и интересно. Научись создавать любые UI своими руками',
  ], {
    styles: {
      background: 'linear-gradient( #3B6AB2, #4994B2)',
      padding: '2rem',
      color: 'white',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(#4994B2, #751FB2)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
];