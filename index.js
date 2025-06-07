const model = [
  {type: 'title', value: 'hello world from JS'},
  {type: 'text', value: 'here we go some text'},
  {type: 'columns', value: [
    '11111111111111',
    '22222222222222',
    '33333333333333',
  ]}
];

const $site = document.querySelector('#site');

model.forEach(block => {
  let html = '';

  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>
    `
  } else if (block.type === 'text') {
    html = `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
  } else if (block.type === 'columns') {

  }

  $site.insertAdjacentHTML('beforeend', html)
  
});