import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { Container, Title, Text } from './styles';

const Home = () => {
	const params = useParams();
	const [ dadosDashboard, setDadosDashboard ] = useState({
		usuarioProcessado: false,
		totalCadastrado: 1,
		totalVacinado: 0,
		totalNaoVacinado: 1,
		posicaoUsuarioNaFila: 1,
	});

	useEffect(
		() => {
			api.get(`/usuarios/${params.id}/dashboard`).then((response) => {
				setDadosDashboard(response.data);
			});
		},
		[ params.id ]
	);

	return (
		<Container>
			<Title>Vacinômetro</Title>

			<Text>Total de pessoas cadastradas para a vacinação: {dadosDashboard.totalCadastrado}.</Text>

			<Text>Total de pessoas vacinadas: {dadosDashboard.totalVacinado}.</Text>

			<Text>Total de pessoas não vacinadas: {dadosDashboard.totalNaoVacinado}.</Text>

			<Text>Você está na posição {dadosDashboard.posicaoUsuarioNaFila} da fila de vacinação.</Text>

			<Text>
				Aguarde o email de confirmação do seu agendamento para dirigir-se ao posto de vacinação mais próximo de
				sua residência.
			</Text>
		</Container>
	);
};

export default Home;
