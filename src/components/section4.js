import React from 'react'
import { Link } from 'gatsby'
//import AndesMap from '../images/map.png'

export default function () {
	const places = [
		{
			actions: [{ date: 'viernes 11/12', time: '16:00 a 19:00hs' }],
			name: 'GO BAR VIAMONTE, CHACRAS DE CORIA',
			address: 'Viamonte, M5505 Chacras de Coria, Mendoza',
			contact: 'Santiago 2615337390',
			iframe:
				'https://www.google.com/maps/place/GO+BAR/@-32.9884031,-68.8850518,15z/data=!4m5!3m4!1s0x0:0x47c23e70fba9f26a!8m2!3d-32.9884031!4d-68.8850518'
		},
		{
			actions: [
				{ date: 'viernes 18/12', time: '16:00 a 19:00hs' },
				{ date: 'sábado 12/12', time: '16:00 a 19:00hs' }
			],
			name: 'CENTRAL DE BEBIDAS',
			address: 'Viamonte 5181, M5505 Chacras de Coria, Mendoza',
			contact: 'Jose 2613906206',
			iframe:
				'https://www.google.com/maps/place/Central+de+bebidas/@-32.9882569,-68.8844671,15z/data=!4m2!3m1!1s0x0:0xaa262fb92c986d9f?sa=X&ved=2ahUKEwjhzNvru4rtAhU8ILkGHeLqDJ4Q_BIwEnoECBUQBQ'
		},
		{
			actions: [{ date: 'domingo 13/12', time: '11:00 a 14:00hs' }],
			name: 'GO BAR MAYORISTA RODRIGUEZ',
			address: 'Cnel Rodríguez 604, M5500 Mendoza',
			contact: 'Santiago 2615337390',
			iframe:
				'https://www.google.com/maps/place/GO+BAR/@-32.8935869,-68.853346,15z/data=!4m2!3m1!1s0x0:0xd86109728ca6d7cb?sa=X&ved=2ahUKEwjZ-Jz-u4rtAhVBCrkGHWUnCZQQ_BIwCnoECBIQBQ'
		},
		{
			actions: [{ date: 'sábado 19/12', time: '16:00 a 19:00hs' }],
			name: 'SUPERMERCADO ÁTOMO',
			address: 'Bolougne Sur Mer y regalado Olguin Las Heras',
			contact: 'Carlos : 2617-161125',
			iframe:
				'https://www.google.com/maps/place/ATOMO+conviene/@-32.851876,-68.860607,15z/data=!4m5!3m4!1s0x0:0xdefa1c716dac6a67!8m2!3d-32.851876!4d-68.860607'
		},
		{
			actions: [{ date: 'domingo 20/12', time: '11:00 a 14:00hs' }],
			name: 'SUPERMERCADO ÁTOMO',
			address: 'San Martin 2430 Las Heras',
			contact: 'Carlos : 2617-161125',
			iframe:
				'https://www.google.com/maps/place/Atomo+Conviene+CENTRAL/@-32.8416537,-68.8363164,17z/data=!3m1!4b1!4m5!3m4!1s0x967e08a1eee67a87:0x3bf5a6d753c998cc!8m2!3d-32.8416582!4d-68.8341277'
		},
		{
			actions: [
				{ date: 'viernes 11/12', time: '20:00 a 1:00hs' },
				{ date: 'sábado 19/12', time: '20:00 a 1:00hs' }
			],
			name: 'NIPOTI. Palmares Open Mall.',
			address: 'Palmares Open Mall. Godoy Cruz, Mendoza',
			contact: 'Agata: +549 2615 193692',
			iframe:
				'https://www.google.com/maps/place/Nipoti+Palmares/@-32.9558189,-68.8681287,15z/data=!4m8!1m2!2m1!1sNIPOTI.+Palmares+Open+Mall.!3m4!1s0x967e0bee14dc0101:0x9d5e12abaf33d2c1!8m2!3d-32.9558189!4d-68.859374'
		},
		{
			actions: [{ date: 'viernes 18/12', time: '20:00 a 1:00hs' }],
			name: 'EL ASADITO. Sarmiento.',
			address: 'Av. Sarmiento 755, M5000 Mendoza',
			contact: 'Diego: + 549 2615 029744',
			iframe:
				'https://www.google.com/maps/place/El+Asadito+%C2%B7+Mendoza/@-32.888893,-68.8501186,17.75z/data=!4m13!1m7!3m6!1s0x967e09049ad8f95f:0x7d52315a6465b4c!2sM5000,+Av.+Sarmiento+755,+M5000+Mendoza!3b1!8m2!3d-32.888746!4d-68.8488303!3m4!1s0x967e09692c6d50b9:0x261586deb022e383!8m2!3d-32.888746!4d-68.8488303'
		},
		{
			actions: [{ date: 'sábado 12/12', time: '20:00 a 1:00hs' }],
			name: 'EL ASADITO. Juan B Justo.',
			address: '5500, Av. Juan B. Justo 512, M5500 DQK, Mendoza',
			contact: 'Diego: + 549 2615 029744',
			iframe:
				'https://www.google.com/maps/place/El+Asadito+%C2%B7+Juan+B+Justo/@-32.8838685,-68.8584433,17z/data=!3m1!4b1!4m5!3m4!1s0x967e08ffd0b9664f:0x65b3f7899b39d79b!8m2!3d-32.883873!4d-68.8562546'
		},
		{
			actions: [{ date: 'jueves 17/12', time: '17:00 a 22:00hs' }],
			name: 'PUNTA DEL LAGO. Pque Gral San Martín.',
			address: ' Avenida del Trabajo, Parque General San Martín, Provincia de Mendoza, Del Trabajo, Mendoza',
			contact: 'damian: +549 2615 591644',
			iframe:
				'https://www.google.com/maps/place/Parque+General+San+Martin/@-32.8900194,-68.8692462,18.25z/data=!4m8!1m2!2m1!1sPUNTA+DEL+LAGO.+Parque+General+San+Mart%C3%ADn!3m4!1s0x95a326187519947f:0x6d81606321bb0289!8m2!3d-32.8898095!4d-68.8700868'
		},
		{
			actions: [{ date: 'jueves 10/12', time: '17:00 a 22:00hs' }],
			name: 'LA FUENTE DEL PARQUE. Pque Gral San Martín.',
			address: 'Parque General San Martín. Fuente de los continentes',
			contact: 'Berna: +549 2612 402758',
			iframe:
				'https://www.google.com/maps/place/Parque+%22Gral.+San+Mart%C3%ADn%22+-+Fuente+de+los+Continentes/@-32.8890722,-68.8688338,17z/data=!3m1!4b1!4m5!3m4!1s0x967e09ac5b8b01ed:0xf351beb7311512ff!8m2!3d-32.8890767!4d-68.8666451'
		}
	]

	const [src, setSrc] = React.useState(
		'https://maps.google.com/maps?q=' + places[0].name + places[0].address + '(' + places[0].name + ')&t=&z=14&ie=UTF8&iwloc=B&output=embed'
	)

	function chunkArray(arr, n) {
		var chunkLength = Math.max(arr.length / n, 1)
		var chunks = []
		for (var i = 0; i < n; i++) {
			if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
		}
		return chunks
	}

	return (
		<div className="section section4" id="UBICACIONES">
			<div className="ubication container-fluid">
				<div className="row w-100">
					<div className="col-lg-6 col-12">
						<div className="ubication-map">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src={src} title="Andes" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<h3 className="ubication_gsap_stagger ubication-title">
							ENCONTRÁ LA CABINA <br /> MÁS CERCANA
						</h3>
						<div className="ubication-list ubication_gsap_stagger row">
							{chunkArray(places, 2).map((col, c) => (
								<div className="col-lg-6 col-12" key={c}>
									{col.map((place, i) => (
										<div className="ubication-list-item " key={i}>
											<a
												href={place.iframe}
												target="_blank"
												rel="noreferrer"
												title={place.address}
												onMouseEnter={() =>
													setSrc(
														'https://maps.google.com/maps?q=' +
															place.name +
															place.address +
															'(' +
															place.name +
															')&t=&z=14&ie=UTF8&iwloc=B&output=embed'
													)
												}
											>
												<strong className="d-block">{place.name}</strong>
												{place.actions.map(action => (
													<div>
														<span>
															{action.date} {action.time}
														</span>
													</div>
												))}
											</a>
										</div>
									))}
								</div>
							))}
						</div>
						<h3 className="ubication_gsap_stagger ubication-subtitle">
							CANJE LATAS
							<small>Se canjea en todos los Átomos de Gran Mendoza</small>
						</h3>
						<p className="ubication_gsap_stagger">
							· GO BAR VIAMONTE, CHACRAS DE CORIA <br />· GO BAR MAYORISTA RODRIGUEZ <br />· GO BAR CASA CENTRAL
						</p>
					</div>
				</div>
			</div>
			<footer className="footer">
				<ul className="footer-links list-unstyled">
					<li className="d-inline-block m-2">
						<a href="https://www.facebook.com/andescerveza/" className="footer-link">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li className="d-inline-block m-2">
						<a href="https://www.instagram.com/andescerveza/" className="footer-link">
							<i className="icon-instagram"></i>
						</a>
					</li>
				</ul>
				<p className="footer-txt">
					BEBER CON MODERACIÓN. <br className="d-md-none" />
					PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. <br />
					NO COMPARTIR ESTE CONTENIDO CON MENORES
				</p>
				<div className="footer-disclamer-links">
					<Link to="/legales#terminosycondiciones" target="_blank" className="footer-disclamer-link" replace>
						Términos de uso
					</Link>
					|
					<Link to="/legales#politicasdeprivacidad" target="_blank" className="footer-disclamer-link" replace>
						Políticas de privacidad
					</Link>
				</div>
			</footer>
		</div>
	)
}
