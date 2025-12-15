export default function CartItem({ item, onRemove }) {
	return (
		<div className='cartItem'>
			<img src={item.image} alt={item.title} />
			<div>
				<div className='cartItemTitle' title={item.title}>
					{item.title}
				</div>
				<div className='cartItemMeta'>
					${Number(item.price).toFixed(2)} × {item.qty} = $
					{(item.price * item.qty).toFixed(2)}
				</div>
			</div>
			<button className='btn' type='button' onClick={() => onRemove(item.id)}>
				Remove
			</button>
		</div>
	)
}
