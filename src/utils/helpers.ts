export const formateDate = (originalDate: string) => originalDate.replace('T', ' ').replace('Z', '').replace(/\..*$/, '');
