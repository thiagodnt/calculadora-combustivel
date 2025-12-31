import './App.css';
import logo from './assets/logo.png';

function App() {
	return (
		<div>
			<main className="container">
				<img src={logo} alt="Logo" />
				<h1 className="title">Qual combustível está mais em conta?</h1>

				<form className="form">
					<label>
						Gasolina (preço por litro em R$):
						<input type="number" placeholder="0.00" min="1" step="0.01" required />
					</label>
					<label>
						Etanol (preço por litro em R$):
						<input type="number" placeholder="0.00" min="1" step="0.01" required />
					</label>

					<button type="submit">Calcular</button>
				</form>
			</main>
		</div>
	);
}

export default App;
