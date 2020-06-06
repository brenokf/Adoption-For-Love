import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button onClick={() => alert('Você clicou')} disabled={boolean('Desabilitado', false)}>{text('Texto do Botão', 'Clique aqui')}</Button>)