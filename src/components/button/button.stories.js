import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../../base.scss';
import './button.scss';
import copyCodeBlock from '@pickra/copy-code-block';


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withActions('click', 'click .btn'))
    .add('button', () => {
        return `
            <button class="btn">${text('Text', 'Click Me')}</button>
            <br>
            <br>
            ${copyCodeBlock(`<button class="btn">${text('Text', 'Click Me')}</button>`)}
        `;
    })
    .add('test', () => {
        const button = document.createElement('button');
        button.innerText = '😀 😎 👍 💯';
        return button;
    });