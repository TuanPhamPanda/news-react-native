import moment from 'moment';

export const parseDate = (time: string): string => {
  const now = moment();
  const pastDate = moment(time, 'YYYY-MM-DD HH:mm');
  const duration = moment.duration(now.diff(pastDate));

  if (duration.asSeconds() < 60) {
    const strNow = 'now';
    return strNow;
  } else if (duration.asMinutes() < 60) {
    const minutes = Math.round(duration.asMinutes());
    return `${minutes} minute ago`;
  } else if (duration.asHours() < 24) {
    const hours = Math.round(duration.asHours());
    return `${hours} hour ago`;
  } else if (duration.asDays() < 30) {
    const days = Math.round(duration.asDays());
    return `${days} day ago`;
  } else if (duration.asDays() < 365) {
    const months = Math.round(duration.asDays() / 30);
    return `${months} month ago`;
  } else {
    const years = Math.round(duration.asYears());
    return `${years} year ago`;
  }
};

export const heightNavigationBottom: number = 60;

export const buttonOpacityActive: number = 0.9;