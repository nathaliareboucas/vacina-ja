import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner.jpg';

import { Container, Banner, Form, FormItem, Actions } from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputMask from '../../components/InputMask';

const Login = () => {
	const [formLogin, setFormLogin] = useState({cpf:'', senha:''});

	const handleChange = (event) => {
		setFormLogin({
			...formLogin,
			[event.currentTarget.name]: event.currentTarget.value
		})
	};

	async function handleSubmit(event) {
    event.preventDefault();
		console.log(formLogin);   
	}

	return (
		<Container>
			<Card width="400px" height="390px" alignItens="center">
				<Banner src={banner} alt="banner vacinação" />
				<Form id="login" onSubmit={handleSubmit}>
					<FormItem>
						<InputMask
							name="cpf"
							value={formLogin.cpf}
							placeholder="CPF"
							required
							mask="cpf"
							maxLength="14"
							width="100%"
							onChange={handleChange}
						/>
					</FormItem>

					<FormItem>
						<Input
							name="senha"
							value={formLogin.senha}
							placeholder="Senha"
							required
							type="password"
							onChange={handleChange}
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
