import { customAlphabet } from 'nanoid';

export function getDefaultShortID(): string {
	const nolookalikesSafe = '6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz';
	const nanoid = customAlphabet(nolookalikesSafe, 8);
	const id = nanoid(8);
	return id;
}
