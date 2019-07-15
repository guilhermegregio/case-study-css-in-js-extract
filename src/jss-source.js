import {colors, fontSizes, fontWeight} from './tokens';

const title = {
  color: colors.white,
  fontSize: fontSizes.large,
  fontWeight: fontWeight.bold,
};

const subtitle = {
  color: colors.white,
  fontSize: fontSizes.medium,
  fontWeight: fontWeight.default,
};

const paragraph = {
  color: colors.gray,
  fontSize: fontSizes.normal,
  fontWeight: fontWeight.default,
};

const button = {
  backgroundColor: colors.buttonPrimary,
  color: colors.brandBackgroundSecondary,
  borderRadius: '25px',
};

const list = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: colors.white,
  '& .base-list__item': {
    fontSize: fontSizes.normal,
  },
  '& .base-list__title': {
    fontSize: fontSizes.medium,
  },
};

const nav = {
  display: 'flex',
};

const link = {
  color: colors.white,
  fontSize: fontSizes.normal,
};

export {title, subtitle, paragraph, list, nav, link, button};
