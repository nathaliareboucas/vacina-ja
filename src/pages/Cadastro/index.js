import React, { useState } from 'react';

import { Container, ContainerCard, Banner, Title, Form, FormItem, Actions } from './styles';
import imageBanner from '../../assets/banner.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';

const Cadastro = () => {
	const [ nome, setNome ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ cpf, setCpf ] = useState('');
	const [ dataNascimento, setDataNascimento ] = useState('');
	const [ municipio, setMunicipio ] = useState('');

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

					<Form>
						<FormItem>
							<Input
								id="nome"
								value={nome}
								placeholder="Nome completo"
								onChange={(event) => setNome(event.target.value)}
							/>
						</FormItem>

						<FormItem>
							<Input
								id="email"
								value={email}
								placeholder="Email"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</FormItem>

						<FormItem>
							<Input
								id="cpf"
								value={cpf}
								placeholder="CPF"
								onChange={(event) => setCpf(event.target.value)}
							/>

							<Input
								id="dataNascimento"
								value={dataNascimento}
								placeholder="Data nascimento"
								onChange={(event) => setDataNascimento(event.target.value)}
							/>

							<SelectInput options={municipios} />
						</FormItem>

						<Actions>
							<Button bgcolor="#2fb6ba" color="#fff" width="150px" type="submit">
								Salvar
							</Button>
							<Button bgcolor="#fe4643" color="#fff" width="150px" type="button">
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
