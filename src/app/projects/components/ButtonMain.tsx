import clsx from 'clsx';
import Link from 'next/link';

const Span = (props: ISpanProps) => {
	const { variant, className = '', children } = props;
	const getBgColor = (variant: SpanVariant) => {
		const mapping = {
			[SpanVariant.Blue]:
				'bg-blue-100 dark:bg-blue-900 dark:text-blue-300',
			[SpanVariant.Gray]:
				'bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
		};
		return mapping[variant];
	};
	return (
		<span
			className={`inline-flex items-center justify-center w-1 h-3 p-2.5 text-sm font-medium ${getBgColor(
				variant,
			)} rounded-full ${className}`}
		>
			{children}
		</span>
	);
};

const ButtonMainSidebar = (props: INavSidebarBtn) => {
	const { name, href, isSelected, isEnabled, spans } = props;
	const sClass = isSelected ? '+' : '-';
	const styleSelected = clsx(
		'border-b pl-4 py-2',
		isSelected && ' bg-gray-50 dark:bg-gray-800',
		isEnabled && ' hover:bg-gray-600',
		!isEnabled && 'bg-gray-900 cursor-not-allowed',
	);
	return (
		<Link href={href} aria-disabled={!isEnabled}>
			<li className={styleSelected}>
				{sClass} {name}
				{spans &&
					spans.map((s, i) => {
						return <Span key={i} {...s} />;
					})}
			</li>
		</Link>
	);
};

export default ButtonMainSidebar;
