import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner.jpg';

import { Container, Banner, Form, FormItem, Actions } from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
	const [ cpf, setCpf ] = useState('');
	const [ senha, setSenha ] = useState('');

	return (
		<Container>
			<Card width="400px" height="390px" alignItens="center">
				<Banner src={banner} alt="banner vacinação" />
				<Form id="login">
					<FormItem>
						<Input
							id="cpf"
							value={cpf}
							placeholder="CPF"
							onChange={(event) => setCpf(event.target.value)}
						/>
					</FormItem>

					<FormItem>
						<Input
							id="senha"
							value={senha}
							placeholder="Senha"
							onChange={(event) => setSenha(event.target.value)}
						/>
					</FormItem>

					<Actions>
						<Button type="submit" width="100%" bgcolor="#2fb6ba" color="#fff">
							Acessar
						</Button>
						<Link to="/cadastro">Cadastre-se</Link>
					</Actions>
				</Form>
			</Card>
		</Container>
	);
};

export default Login;
