import image from './assets/image.png'

export const model = [
  {type: 'title', value: 'Website builder from JavaScript', options: {
    tag: 'h2',
    styles: `background: linear-gradient(#751FB2, #3B6AB2); color: #fff; text-align: center; padding: 1.5rem;`,
  }},
  {type: 'text', value: 'here we go some text'},
  {type: 'columns', value: [
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444 '
  ]},
  {type: 'image', value: image,}
];