export const compareBy = (value) => {
  return (a, b) => {
    const ascValue = value.startsWith('-') ? -1 : 1;
    const sortValue = value.startsWith('-') ? value.substr(1) : value;
    if (a[sortValue] !== b[sortValue]) {
      if (typeof a[sortValue] === 'string' && typeof b[sortValue] === 'string') {
        const durationA = parseInt(a[sortValue].split(' ')[0], 10);
        const durationB = parseInt(b[sortValue].split(' ')[0], 10);
        if (!isNaN(durationA) && !isNaN(durationB)) {
          return durationA > durationB ? ascValue : -ascValue;
        } else {
          return a[sortValue].localeCompare(b[sortValue]) * ascValue;
        }
      } else {
        return a[sortValue] > b[sortValue] ? ascValue : -ascValue;
      }
    }
  }
};
 