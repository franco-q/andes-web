import React from 'react'
export default function ({ active }) {
	return (
		<div className="pagination" id="pagination">
			<div className={['pagination-dot',  active === 1 ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 2 ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 3 ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 4 ? 'pagination-dot_active' : ''].join(' ')}></div>
		</div>
	)
}
