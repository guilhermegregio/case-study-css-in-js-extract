import fs from 'fs';
import path from 'path';
import jssModule from 'jss';
import presetModule from 'jss-preset-default';
import * as stylesImport from './jss-source';

const jss = jssModule.default;
const preset = presetModule.default;

const {global, ...styles} = stylesImport;

jss.setup({
  ...preset(),
  createGenerateClassName: () => {
    return rule => {
      return rule.key;
    };
  },
});

const sheet = jss.createStyleSheet({...global, ...styles});

const buildJss = path.join(process.cwd(), 'build', 'jss', 'index.css');
const buildEmotion = path.join(process.cwd(), 'build', 'emotion', 'index.css');

fs.writeFile(path.normalize(buildJss), sheet.toString(), err => {
  if (err) {
    return console.log(err);
  }
  console.log('Finish!');
});
