const KEY = 'mini_marketplace_cart_v1'

export function loadCart() {
	try {
		const raw = localStorage.getItem(KEY)
		return raw ? JSON.parse(raw) : []
	} catch {
		return []
	}
}

export function saveCart(cart) {
	localStorage.setItem(KEY, JSON.stringify(cart))
}
