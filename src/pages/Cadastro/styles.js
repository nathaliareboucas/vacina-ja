import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	padding: 30px;
`;

export const Title = styled.h1`margin-bottom: 20px;`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const FormItem = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px;
`;

export const Actions = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	margin-bottom: 10px;
`;
