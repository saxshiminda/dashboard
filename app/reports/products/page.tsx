'use client';

import { Box } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

export default function GettingStartedExample() {
  return (
    <DataTable
        withColumnBorders
        striped
        highlightOnHover
        // provide data
        records={[
            { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
            { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'a' },
            { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
            { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic', a: 12 },
            // more records...
        ]}
        // define columns
        columns={[
            {
            accessor: 'id',
            // this column has a custom title
            title: '#',
            // right-align column
            textAlign: 'right',
            },
            { accessor: 'name' },
            {
            accessor: 'party',
            // this column has custom cell data rendering
            render: ({ party }) => (
                <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
                {party.slice(0, 3).toUpperCase()}
                </Box>
            ),
            },
            { accessor: 'bornIn' },
            { accessor: 'a' },
        ]}
        // execute this callback when a row is clicked
        onRowClick={({ record: { name, party, bornIn } }) =>
            showNotification({
            title: `Clicked on ${name}`,
            message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
            withBorder: true,
        })
      }
    />
  );
}