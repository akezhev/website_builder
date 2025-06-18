import {block} from '../utils';
import { TextBlock, TitleBlock } from './blocks';

export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add)
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value;
    const styles = event.targer.styles;

    const newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles})

  }
}

