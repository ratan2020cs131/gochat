import './loader.css'

const MyComponent = () => {

	const r = 500
	const w = 8 * r,
		h = 0.5 * w,
		x = -0.5 * w,
		y = -0.5 * h
	const c = Math.round(r / Math.SQRT2)
	const l = Math.ceil((3 * Math.PI + 4) * r)
	const d = Math.floor(Math.PI * r)

	return (
		<svg viewBox={[x, y, w, h].join(' ')}>
			<path
				id="inf"
				d={`M${c},${-c}A${r},${r} 0 1 1 ${c},${c}L${-c},${-c}A${r},${r} 0 1 0 ${-c},${c}z`}
			/>
			<use
				xlinkHref="#inf"
				strokeDasharray={`${d} ${l - d}`}
				strokeDashoffset={`${l}px`}
			/>
		</svg>
	)
}

export default MyComponent
