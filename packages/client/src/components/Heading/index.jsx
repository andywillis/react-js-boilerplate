import classnames from 'classnames';

import style from './style.module.css';

export default function Heading({ size, color, text }) {

  const cls = classnames(style[color]);

  switch (size) {
    case '1': return <h1 className={cls}>{text}</h1>;
    case '2': return <h2 className={cls}>{text}</h2>;
    case '3': return <h3 className={cls}>{text}</h3>;
    case '4': return <h4 className={cls}>{text}</h4>;
    case '5': return <h5 className={cls}>{text}</h5>;
  }

  return <h1 className={cls}>{text}</h1>;

}
