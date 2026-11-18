import { PUBLIC_PHOTOS_URL } from '$app/env/public';

const baseUrl = PUBLIC_PHOTOS_URL.replace(/\/+$/, '');

// `path` is the file's location in the R2 bucket, e.g. 'home/ja_1.jpg'.
export function photo(path: string): string {
	return `${baseUrl}/${path}`;
}
