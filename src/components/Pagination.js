import React from 'react'
export default function ({ active }) {
	return (
		<div className="pagination" id="pagination">
			<div className={['pagination-dot',  active === 'section1' ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 'PRINCIPAL' ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 'PARTICIPACION' ? 'pagination-dot_active' : ''].join(' ')}></div>
			<div className={['pagination-dot',  active === 'UBICACIONES' ? 'pagination-dot_active' : ''].join(' ')}></div>
		</div>
	)
}
