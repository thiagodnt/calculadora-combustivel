import { useState, FormEvent } from 'react';

import './App.css';
import logo from './assets/logo.png';

/*
	Resultado = Álcool / Gasolina
	Se Resultado <= 0.7, compensa usar Álcool, se não, compensa usar Gasolina
*/

type Combustivel = 'Álcool' | 'Gasolina';

interface InfoProps {
	resultado: string;
	gasolina: string | number;
	alcool: string | number;
}

function App() {
	const [gasolinaValue, setGasolinaValue] = useState(0);
	const [alcoolValue, setAlcoolValue] = useState(0);
	const [info, setInfo] = useState<InfoProps>();

	function calcularCombustivel(gasolina: number, alcool: number): Combustivel {
		return alcool / gasolina <= 0.7 ? 'Álcool' : 'Gasolina';
	}

	function calcular(e: FormEvent): void {
		e.preventDefault();
		const resultado = calcularCombustivel(gasolinaValue, alcoolValue);

		setInfo({
			resultado: resultado,
			gasolina: formatarMoeda(gasolinaValue),
			alcool: formatarMoeda(alcoolValue),
		});
	}

	function formatarMoeda(value: number): string {
		const valorFormatado = value.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});

		return valorFormatado;
	}

	return (
		<div>
			<main className="container">
				<img src={logo} alt="Logo" />
				<h1 className="title">Qual combustível compensa utilizar?</h1>

				<form className="form" onSubmit={calcular}>
					<label>
						Gasolina (preço por litro em R$):
						<input
							type="number"
							placeholder="0.00"
							min="1"
							step="0.01"
							required
							value={gasolinaValue}
							onChange={(e) => setGasolinaValue(Number(e.target.value))}
						/>
					</label>
					<label>
						Álcool (preço por litro em R$):
						<input
							type="number"
							placeholder="0.00"
							min="1"
							step="0.01"
							required
							value={alcoolValue}
							onChange={(e) => setAlcoolValue(Number(e.target.value))}
						/>
					</label>

					<button type="submit">Calcular</button>

					{info && Object.keys(info) && (
						<section className="result">
							<h1>
								Compensa usar <strong>{info?.resultado}</strong>
							</h1>
							<span>Álcool: {info?.alcool}</span>
							<span>Gasolina: {info?.gasolina}</span>
						</section>
					)}
				</form>
			</main>
		</div>
	);
}

export default App;
