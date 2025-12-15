import { useEffect, useMemo, useState } from 'react'
import CartList from './CartList'
import { loadCart, saveCart } from './cartStorage'

export default function CartApp() {
	const [items, setItems] = useState(() => loadCart())

	useEffect(() => {
		const onAdd = e => {
			const p = e.detail
			setItems(prev => addOrInc(prev, p))
		}
		window.addEventListener('cart:add', onAdd)
		return () => window.removeEventListener('cart:add', onAdd)
	}, [])

	useEffect(() => {
		saveCart(items)
	}, [items])

	const totalCount = useMemo(
		() => items.reduce((s, it) => s + it.qty, 0),
		[items]
	)

	const totalSum = useMemo(
		() => items.reduce((s, it) => s + it.qty * it.price, 0),
		[items]
	)

	const removeItem = id => setItems(prev => prev.filter(x => x.id !== id))

	return (
		<div className='cartWrap'>
			<div className='cartTop'>
				<div>
					<span className='badge'>{totalCount}</span> <span>items</span>
				</div>
				<strong>${totalSum.toFixed(2)}</strong>
			</div>

			<CartList items={items} onRemove={removeItem} />
		</div>
	)
}

function addOrInc(prev, p) {
	const idx = prev.findIndex(x => x.id === p.id)
	if (idx === -1) return [...prev, { ...p, qty: 1 }]
	return prev.map(x => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
}
