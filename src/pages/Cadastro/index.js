import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';

import { Container, Title, Form, FormItem, Actions } from './styles';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';
import InputMask from '../../components/InputMask';
import api from '../../services/api';

const Cadastro = () => {
	const { keycloak } = useKeycloak();
	const initialState = {
		nome: '',
		email: '',
		cpf: '',
		dataNascimento: '',
		municipio: '',
	};

	const UF = 23; // Id do Estado do Ceara
	const [ dadosForm, setDadosForm ] = useState(initialState);
	const [ municipios, setMunicipios ] = useState([ { label: 'Selecione', value: '' } ]);
	const history = useHistory();

	const handleChange = (event) => {
		setDadosForm({
			...dadosForm,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const handleClick = () => {
		setDadosForm(initialState);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const uid = keycloak.tokenParsed.sub;
		const usuario = { ...dadosForm, id: uid };
		api
			.post('/usuarios', usuario, { headers: { Authorization: `Bearer ${keycloak.token}` } })
			.then(() => {
				alert('Cadastro realizado com sucesso!');
				setDadosForm(initialState);
				history.push(`/usuarios/${uid}/dashboard`);
			})
			.catch((err) => alert(err));
	}

	useEffect(
		() => {
			if (municipios.length === 1) {
				axios
					.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios?orderBy=nome`)
					.then((municipiosIBGE) => {
						let opcoesMunicipios = municipiosIBGE.data.map((municipio) => {
							return { value: municipio.nome, label: municipio.nome };
						});
						opcoesMunicipios.push({ value: '', label: 'Selecione' });
						setMunicipios(opcoesMunicipios);
					})
					.catch((err) => alert('Erro: Sistema indisponível, tente novamente mais tarde'));
			}
		},
		[ municipios ]
	);

	return (
		<Container>
			<Title>Cadastro</Title>

			<Form onSubmit={handleSubmit}>
				<FormItem>
					<Input
						name="nome"
						value={dadosForm.nome}
						required
						placeholder="Nome completo"
						onChange={handleChange}
					/>
					<Input
						name="email"
						value={dadosForm.email}
						placeholder="Email"
						required
						type="email"
						onChange={handleChange}
					/>
				</FormItem>

				<FormItem>
					<InputMask
						name="cpf"
						value={dadosForm.cpf}
						placeholder="CPF"
						required
						mask="cpf"
						width="100%"
						onChange={handleChange}
					/>

					<InputMask
						name="dataNascimento"
						value={dadosForm.dataNascimento}
						placeholder="Data nascimento"
						required
						mask="date"
						width="100%"
						onChange={handleChange}
					/>

					<SelectInput
						name="municipio"
						options={municipios}
						onChange={handleChange}
						defaultValue={municipios[0]}
					/>
				</FormItem>

				<Actions>
					<Button bgcolor="#2fb6ba" color="#fff" width="150px" type="submit">
						Salvar
					</Button>
					<Button bgcolor="#fe4643" color="#fff" width="150px" type="button" onClick={handleClick}>
						Cancelar
					</Button>
				</Actions>
			</Form>
		</Container>
	);
};

export default Cadastro;
