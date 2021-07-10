import styled from 'styled-components';
import img from '../../assets/vacina-login.jpg';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 60px 150px;
`;

export const Banner = styled.img`
	width: 100%;
	height: 150px;
	margin-bottom: 20px;
	border-radius: 5px;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const FormItem = styled.div`
	width: 100%;
	display: flex;
`;

export const Actions = styled.div`
	width: 100%;
	display: flex;
	margin-top: 15px;
	flex-direction: column;
	align-items: center;
`;
