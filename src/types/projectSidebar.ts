enum SpanVariant {
	Blue = 'blue',
	Gray = 'gray',
}

interface ISpanProps {
	variant: SpanVariant;
	className?: string;
	children?: React.ReactNode;
}

interface INavSidebarBtn extends INavLinkData {
	// INavHeaderBtn
	// TODO: optional
	isEnabled?: boolean;
	isSelected?: boolean;
	testField?: boolean;
	spans?: ISpanProps[];
}
