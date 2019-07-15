import emotion from '@emotion/core';
import {colors, fontSizes, fontWeight} from './tokens';

const {css} = emotion;

const title = css`
  color: ${colors.white};
  font-size: ${fontSizes.large};
  font-weight: ${fontWeight.bold};
`;
title.className = '.title';

const subtitle = css`
  color: ${colors.white};
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeight.default};
`;
subtitle.className = '.subtitle';

const paragraph = css`
  color: ${colors.gray};
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeight.default};
`;
paragraph.className = '.paragraph';

const button = css`
  background-color: ${colors.buttonPrimary};
  color: ${colors.brandBackgroundSecondary};
  border-radius: 25px;
`;
button.className = '.base-button';

const list = css`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${colors.white};

  & .base-list__item {
    font-size: ${fontSizes.normal};
  }
  & .base-list__title {
    font-size: ${fontSizes.medium};
  }
`;
list.className = '.base-list';

const nav = css`
  display: flex;
`;
nav.className = '.base-nav';

const link = css`
  color: ${colors.white};
  font-size: ${fontSizes.normal};
`;
link.className = '.base-link';

export {title, subtitle, paragraph, list, nav, link, button};
