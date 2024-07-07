interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onInStockChange: (value: boolean) => void;
}

export function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}: Props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}
