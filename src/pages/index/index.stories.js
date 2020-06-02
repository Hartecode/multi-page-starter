import { storiesOf } from '@storybook/html';
import '../../base.scss';
import './index.scss';
import copyCodeBlock from '@pickra/copy-code-block';
import template from './index.html';

const options = {
    cssOverrides: `
      .container code {
        padding: 1.5rem;
      }
    `
  }
  
storiesOf('Pages/Index', module)
    .add('Home', () => {
        return `
            ${template}
            <br>
            <br>
            ${copyCodeBlock(template, options)}
        `;
    });