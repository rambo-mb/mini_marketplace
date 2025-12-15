const API = 'https://fakestoreapi.com/products'

export async function initProducts() {
	const root = document.getElementById('products')
	if (!root) return

	root.innerHTML = 'Loading...'

	const res = await fetch(API)
	const products = await res.json()

	root.innerHTML = ''
	for (const p of products) {
		root.appendChild(productCard(p))
	}
}

function productCard(p) {
	const el = document.createElement('div')
	el.className = 'card'
	el.innerHTML = `
    <img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" />
    <div class="cardTitle" title="${escapeAttr(p.title)}">${escapeHTML(
		p.title
	)}</div>
    <div class="cardRow">
      <strong>$${Number(p.price).toFixed(2)}</strong>
      <button class="btn" type="button">Add to cart</button>
    </div>
  `

	el.querySelector('button').addEventListener('click', () => {
		window.dispatchEvent(
			new CustomEvent('cart:add', { detail: mapToCartItem(p) })
		)
	})

	return el
}

function mapToCartItem(p) {
	return { id: p.id, title: p.title, price: p.price, image: p.image }
}

function escapeHTML(s) {
	return String(s).replace(
		/[&<>"']/g,
		c =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#039;',
			}[c])
	)
}
function escapeAttr(s) {
	return escapeHTML(s)
}
