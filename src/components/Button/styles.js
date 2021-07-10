import styled from 'styled-components';

export const Container = styled.button`
	width: ${(props) => props.width};
	margin: 7px;
	padding: 10px;
	border-radius: 5px;

	font-weight: bold;
	color: ${(props) => props.color};
	background-color: ${(props) => props.bgcolor};

	transition: opacity .3s;

	&:hover {
		opacity: .7;
	}
`;
