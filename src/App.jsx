import { useEffect } from 'react'
import CartApp from './cart/CartApp'
import './styles.css'
import { initProducts } from './vanilla/products'

export default function App() {
	useEffect(() => {
		initProducts() // Vanilla JS: API dan products yuklaydi va DOMga chizadi
	}, [])

	return (
		<div className='page'>
			<header className='header'>
				<h1>Mini Marketplace</h1>
			</header>

			<main className='grid'>
				<section className='panel'>
					<div className='panelHead'>
						<h2>Products</h2>
					</div>
					<div id='products' className='products' />
				</section>

				<section className='panel'>
					<div className='panelHead'>
						<h2>Cart</h2>
					</div>

					{/* React zona */}
					<CartApp />
				</section>
			</main>
		</div>
	)
}
