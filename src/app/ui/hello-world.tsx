import cn from 'classnames';
import { useState } from 'react';
import s from './helloWorld.module.css';

const HelloWorld = () => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div>
      <div className={cn(isRotate && s.textRotate, s.page, s.color)}>
        <h1 onClick={() => setIsRotate((prev) => !prev)}>Hello world!</h1>
      </div>
    </div>
  );
};

export default HelloWorld;
