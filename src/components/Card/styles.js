import styled from 'styled-components';

export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.alignItens};
	padding: 10px;
	border-radius: 5px;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
