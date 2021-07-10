import React from 'react';

import { Container } from './styles';

const SelectInput = ({ options, onChange, defaultValue }) => {
	return (
		<Container>
			<select onChange={onChange} defaultValue={defaultValue}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</Container>
	);
};

export default SelectInput;
