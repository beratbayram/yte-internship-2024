import { ReactNode } from "react";
import { Product } from "./Product.type";

interface Props {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export function ProductTable({ products, filterText, inStockOnly }: Props) {
  const rows: ReactNode[] = [];
  let lastCategory: Product['category'] | null = null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category} className="category">
          <td colSpan={2}>{product.category}</td>
        </tr>
      );
      lastCategory = product.category;
    }
    rows.push(
      <tr key={product.name} className={product.stocked ? '' : 'out-of-stock'}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}