import * as sourceStyles from './emotion-source';

Object.keys(sourceStyles).forEach(key => {
  const {styles, className = `.${key}`} = sourceStyles[key];
  console.log(`${className} { ${styles} }`);
});
