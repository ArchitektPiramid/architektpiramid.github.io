interface ICategory {
	id: string;
	name: string;
	category: string;
	description?: string;
	price?: number;
	purchaseDate?: string; // np. w formacie "YYYY-MM-DD"
	// Dodaj inne pola w zależności od potrzeb
}
