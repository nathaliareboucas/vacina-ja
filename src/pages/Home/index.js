import React from 'react';

import { Container, Text } from './styles';

const Home = () => {
	const dataCadastro = '10/07/2021';
	const posicaoFila = 3;

	return (
		<Container>
			<Text>Parabéns! Você se cadastrou em {dataCadastro}.</Text>

			<Text>Você está na posição {posicaoFila} da fila de vacinação.</Text>

			<Text>Aguarde o email de confirmação do seu agendamento para dirigir-se ao posto de vacinação.</Text>
		</Container>
	);
};

export default Home;
