import React, { useState } from 'react'
import Cleave from 'cleave.js/react'
import AndesBrandSVG from '../images/brand.inline.svg'
import { Link } from 'gatsby'

export default ({ onAccept }) => {
	let $el = React.useRef(null)
	let $d = React.useRef(null)
	let $m = React.useRef(null)
	let $Y = React.useRef(null)
	let [d, setD] = useState(null)
	let [m, setM] = useState(null)
	let [y, setY] = useState(null)

	function calculateAge(birthday) {
		// birthday is a date
		var ageDifMs = Date.now() - birthday.getTime()
		var ageDate = new Date(ageDifMs) // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970)
	}

	function handleChange(e) {
		let val = e.target.value + ''
		switch (e.target.name) {
			case 'd':
				if (val.length === 2) {
					$m.current.element.focus()
					setD(val)
				}

				break
			case 'm':
				if (val.length === 2) {
					$Y.current.element.focus()
					setM(val)
				}
				break
			case 'Y':
				if (val.length === 4) {
					setY(val)
				}
				break
			default:
				break
		}
	}
    
    function handleDateChange(e) {
		var [year, month, day] = e.target.value.split('-')
		setD(day)
		setM(month)
		setY(year)
	}
    
    function submit() {
		let bornDate = new Date([y, m, d].join('/'))

        let age = calculateAge(bornDate)

		if (age > 18) {
			onAccept($el.current, bornDate)
		} else {
			alert('Debe ser mayor de edad para continuar.')
		}
	}
	return (
		<div className="disclamer-wrap" ref={$el}>
			<div className="disclamer-inner">
				<div className="disclamer-brand">
					<AndesBrandSVG />
				</div>
				<p>Ingresá tu fecha de nacimiento</p>
				<div className="disclamer-dpicker">
					<Cleave
						className="disclamer-dpicker_cleave"
						options={{ date: true, datePattern: ['d'] }}
						value={d}
						placeholder="DD"
						name="d"
						ref={$d}
						onChange={handleChange}
					/>
					<Cleave
						className="disclamer-dpicker_cleave"
						options={{ date: true, datePattern: ['m'] }}
						value={m}
						placeholder="MM"
						name="m"
						ref={$m}
						onChange={handleChange}
					/>
					<Cleave
						className="disclamer-dpicker_cleave"
						options={{ date: true, datePattern: ['Y'] }}
						value={y}
						placeholder="AAAA"
						name="Y"
						ref={$Y}
						onChange={handleChange}
					/>
					<input
						type="date"
						className="disclamer-dpicker_mobile"
						onInput={handleDateChange}
					/>
				</div>
				<button className="disclamer-accept" onClick={() => submit()}>
					ACEPTAR
				</button>

				<div className="mt-auto">
					<p className="disclamer-txt">
						No se quede conectado si comparte el dispositivo con menores. <br />
						Usamos cookies para mejorar nuestros servicios.
						<br />
						Al continuar la navegación está aceptando los términos de uso, las políticas
						de privacidad y el uso de las cookies
					</p>

					<div className="disclamer-links">
					<Link
						to="/legales#basesycondiciones"
						target="_blank"
						className="disclamer-link"
						replace
					>
						Bases y condiciones
					</Link>
					|
						<Link
							to="/legales#terminosycondiciones"
							target="_blank"
							className="disclamer-link"
							replace
						>
							Términos de uso
						</Link>
						|
						<Link
							to="/legales#politicasdeprivacidad"
							target="_blank"
							className="disclamer-link"
							replace
						>
							Políticas de privacidad
						</Link>
					</div>
					<div className="disclamer-copyright">
						COPYRIGHT ©2020. CERVEZA ANDES. Todos los derechos reservados.
					</div>
				</div>
			</div>
		</div>
	)
}
