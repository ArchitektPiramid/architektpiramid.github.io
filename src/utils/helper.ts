export default function isDEBUG() {
	return process.env.DEBUG_UI === 'true';
}

export function dBorder(): string {
	return isDEBUG() ? 'border-2 border-dashed border-red-500' : '';
}
