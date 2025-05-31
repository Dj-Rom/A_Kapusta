import { useState } from 'react';
import styles from './TableWithElements.module.css';

const TableWithElements = ({ props }) => {
  const [focus, setFocus] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const handleClick = (url, d) => {
    console.log(focus[d['id']]);

    window.location = url;
  };

  return props.map((d, i) => {
    return (
      <div key={i} className={styles.elementWithLinkForPorfolio}>
        <div
          className={styles.imageFromElement}
          onClick={() => handleClick(d.urlProject, d)}
          onMouseOver={() => setFocus({ ...focus, [d['id']]: true })}
          onMouseLeave={() => setFocus({ ...focus, [d['id']]: false })}
        >
          {focus[d.id] ? (
            <img src={d.image2} alt={styles.elementTitle} />
          ) : (
            <img src={d.image} alt={styles.elementTitle} />
          )}
        </div>
        <span className={styles.spanTitle}>{d.title}</span>
      </div>
    );
  });
};

export default TableWithElements;
