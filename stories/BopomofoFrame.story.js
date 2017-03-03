import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BopomofoFrame from '../src/BopomofoFrame';

storiesOf('BopomofoFrame', module)
  .add('3個注音符號＆1個聲符', () => (
    <BopomofoFrame char="皇" bopomofos="ㄏㄨㄤˊ" />
  ))
  .add('沒有聲符', () => (
    <BopomofoFrame char="濤" bopomofos="ㄊㄠ" />
  ));
