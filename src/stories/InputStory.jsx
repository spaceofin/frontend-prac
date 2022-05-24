import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/Input';

storiesOf('Input', module)
  .add('기본 설정', () => <Input name="name" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('label 예제2', function () {
    return <Input type="checkbox" name="check" label="체크하세요" />;
  });
