import path from 'path';

export function getHtmlPath(filename: string) {
  return path.join(__dirname, `../pages/${filename}`);
}
