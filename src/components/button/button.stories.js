import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../../base.scss';
import './button.scss';
import copyCodeBlock from '@pickra/copy-code-block';

const options = {
    cssOverrides: `
      .container code {
        padding: 1.5rem;
      }
    `
  }
  


storiesOf('Components/Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withActions('click', 'click .btn'))
    .add('example', () => {
        return `
            <button class="btn">${text('Text', 'Click Me')}</button>
            <br>
            <br>
            ${copyCodeBlock(`<button class="btn">${text('Text', 'Click Me')}</button>`, options)}
        `;
    })
    .add('test', () => {
        const button = document.createElement('button');
        button.innerText = '😀 😎 👍 💯';
        return button;
    });