class AppSample extends HTMLElement {
	constructor () {
	super()
	console.log("Creado el componente")
	/* this.attachShadow({mode: 'open'})
	.innerHTML = "<h1>Componente Web</h1>" */
	const oImport =
		document.querySelector('link[rel="import"]').import;
	const oElem = oImport.querySelector('#temp1')

	this.attachShadow({mode: 'open'}).innerHTML = oElem.innerHTML
	}
}

customElements.define('app-sample', AppSample)

