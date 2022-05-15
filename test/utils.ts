import * as fs from 'fs';

export function getFEN(path: string): string {
  return fs.readFileSync(path, 'utf8');
}
