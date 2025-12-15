import CartItem from './CartItem'

export default function CartList({ items, onRemove }) {
	if (!items.length) return <div>Cart is empty.</div>

	return (
		<div className='cartList'>
			{items.map(it => (
				<CartItem key={it.id} item={it} onRemove={onRemove} />
			))}
		</div>
	)
}
