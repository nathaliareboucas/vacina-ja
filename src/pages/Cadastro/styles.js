import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Banner = styled.img`
	width: 100%;
	height: 200px;
`;

export const ContainerCard = styled.div`
	height: 100%;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
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
