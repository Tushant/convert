import moment from 'moment';

export const ICON_BEFORE_POSITION = 'before';
export const ICON_AFTER_POSITION = 'after';

export const formatDates = value => value ? moment(value) : null;

export const normalizeDates = value =>
  value ? value.format('YYYY-MM-DD') : null;
