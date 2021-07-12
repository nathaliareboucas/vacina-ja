import React, { useState } from 'react';

import { Container, ContainerCard, Banner, Title, Form, FormItem, Actions } from './styles';
import imageBanner from '../../assets/banner.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';
import InputMask from '../../components/InputMask';

const Cadastro = () => {
	const initialState = {
		nome: '',
		email: '',
		cpf: '',
		dataNascimento: '',
		municipio: ''		
	};

	const [dadosForm, setDadosForm] = useState(initialState);

	const handleChange = (event) => {
		setDadosForm({
			...dadosForm,
			[event.currentTarget.name]: event.currentTarget.value
		})
	};

	async function handleSubmit(event) {
    event.preventDefault();
		console.log(dadosForm);   
	}
	
	const handleClick = () => {
		setDadosForm(initialState);
	}

	const municipios = [
		{ label: 'Fortaleza', value: 'CE' },
		{ label: 'São Paulo', value: 'SP' },
		{ label: 'Rio de Janeiro', value: 'RJ' },
	];

	return (
		<Container>
			<Banner src={imageBanner} alt="Banner vacinação covid" />

			<ContainerCard>
				<Card width="80%" height="80%">
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
						</FormItem>

						<FormItem>
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
								maxLength="14"
								onChange={handleChange}
							/>

							<InputMask
								name="dataNascimento"
								value={dadosForm.dataNascimento}
								placeholder="Data nascimento"
								required
								mask="date"
								width="100%"
								maxLength="10"
								onChange={handleChange}
							/>

							<SelectInput options={municipios} />
						</FormItem>

						<Actions>
							<Button bgcolor="#2fb6ba" color="#fff" width="150px" type="submit">
								Salvar
							</Button>
							<Button bgcolor="#fe4643" color="#fff" width="150px" type="button"
								onClick={handleClick}>
								Cancelar
							</Button>
						</Actions>
					</Form>
				</Card>
			</ContainerCard>
		</Container>
	);
};

export default Cadastro;
