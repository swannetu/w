import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content = 'Texte par defaut';
  VAL;

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    if (this.size < 20) {
      return 'Attention';
    }
    if (this.size < 50) {
      return 'warning';
    } else {
      return 'info';
    }
  }

  get modif() {
    if (this.size < 20) {
      return 'Attention';
    } else {
    }
  }

  @action
  enregistrer() {
    this.VAL = this.content;
  }

  @action
  effacer() {
    this.content = '';
  }
}
