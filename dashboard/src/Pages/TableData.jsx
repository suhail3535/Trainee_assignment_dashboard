import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
} from '@chakra-ui/react';

const TableData = ({ data }) => {
    const [selectedName, setSelectedName] = useState('');

    const handleChange = (event) => {
        setSelectedName(event.target.value);
    };

    return (
        <div>
            <Select value={selectedName} onChange={handleChange} placeholder="Select name">

                {data.map((ele) => (
                    <option key={ele.name} value={ele.name}>
                        {ele.name}
                    </option>
                ))}
            </Select>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data
                            .filter((ele) =>ele.name === selectedName)
                            .map((ele) => (
                                <Tr key={ele.name}>
                                    <Td>{ele.name}</Td>
                                    <Td>
                                        {/* GitHub link */}
                                        <a style={{ color: "blue" }} href={ele.github} target="_blank" rel="noopener noreferrer">{ele.github}</a>
                                    </Td>
                                    <Td isNumeric>{ele.date}</Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TableData;
