import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Container, Title, Text } from './styles';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard = () => {
	const { keycloak } = useKeycloak();
	const uid = keycloak.tokenParsed.sub;
	const [ dadosDashboard, setDadosDashboard ] = useState({});

	useEffect(
		() => {
			api
				.get(`/usuarios/${uid}/dashboard`, { headers: { Authorization: `Bearer ${keycloak.token}` } })
				.then((response) => {
					setDadosDashboard(response.data);
				})
				.catch((err) => alert(err.mensagemUsuario));
		},
		[ uid, keycloak.token ]
	);

	return (
		<Container>
			<Title>Vacinômetro</Title>

			{dadosDashboard.usuarioCadastrado ? (
				<div>
					<Text>Total de pessoas cadastradas para a vacinação: {dadosDashboard.totalCadastrado}.</Text>

					<Text>Total de pessoas vacinadas: {dadosDashboard.totalVacinado}.</Text>

					<Text>Total de pessoas não vacinadas: {dadosDashboard.totalNaoVacinado}.</Text>

					<Text>Você está na posição {dadosDashboard.posicaoUsuarioNaFila} da fila de vacinação.</Text>
				</div>
			) : (
				<Text>Você deve primeiro realizar o seu cadastro.</Text>
			)}
		</Container>
	);
};

export default Dashboard;
