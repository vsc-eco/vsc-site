export const headerConvert = (header: string) => {
    return header.split(' ').join('-').toLowerCase();
}