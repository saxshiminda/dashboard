'use client';

import { Box } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import Dialog from '@/app/components/dialog';
import React, { useState, useEffect } from 'react';
import { Input, Selector, TextArea } from '../../components/elements';
import 'flowbite';

export default function GettingStartedExample() {
  const [toggle, setToggle] = useState(false);

  const [values, setValues] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    datepicker: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOpen = () => {
    console.log(values)
  };

  const handleClose = () => {
    setToggle(false);
  };

  const handleSubmit = () => {
    console.log(values.price)
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      datepicker: e.target.value,
    }));    
  };

  return (
    <>
      <div className="mb-4">
        <Input
          id='datepicker'
          label="Date"
          type="date"
          name="datepicker"
          value={values.datepicker}
          onChange={handleDateChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          required
          onFocus={(e) => (e.target as HTMLInputElement).showPicker()}
          onClick={(e) => (e.target as HTMLInputElement).showPicker()}
        />
      </div>
      
      <DataTable
        withColumnBorders
        striped
        highlightOnHover
        // provide data
        records={[
          // set with dialog data
          { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, description: 'A laptop computer' },
          { id: 2, name: 'T-shirt', category: 'Clothing', price: 20, description: 'A cotton t-shirt' },
          { id: 3, name: 'Book', category: 'Books', price: 10, description: 'A good book' },
          { id: 4, name: 'Smartphone', category: 'Electronics', price: 500, description: 'A smartphone' },
          { id: 5, name: 'Jeans', category: 'Clothing', price: 50, description: 'A pair of jeans' },
          { id: 6, name: 'Headphones', category: 'Electronics', price: 100, description: 'A pair of headphones' },
          { id: 7, name: 'Socks', category: 'Clothing', price: 5, description: 'A pair of socks' },
          { id: 8, name: 'Tablet', category: 'Electronics', price: 300, description: 'A tablet device' },
          { id: 9, name: 'Dress', category: 'Clothing', price: 70, description: 'A nice dress' },
          { id: 10, name: 'E-book', category: 'Books', price: 5, description: 'An electronic book' },
        ]}
        // define columns
        columns={[
            {
              accessor: 'id',
              title: 'ID',
              // right-align column
              textAlign: 'right',
            },
            { accessor: 'name' },
            {
            accessor: 'category',
            // this column has custom cell data rendering
            render: ({ category }) => (
                <Box fw={700} c={category === 'Electronics' ? 'blue' : 'red'}>
                {category.slice(0, 6).toUpperCase()}
                </Box>
            ),
            },
            { accessor: 'price' },
            { accessor: 'description' },
        ]}
        onRowDoubleClick={(row) => {
          setValues({
            name: row.record.name,
            price: row.record.price.toString(),
            category: row.record.category,
            description: row.record.description,
            datepicker: values.datepicker,
          });

          setToggle(true);
        }}
      />

    <Dialog
      toggle={toggle}
      title="Create New Product"
      onClose={handleClose}
      onOpen={handleOpen}
      values={values}
      buttons={[
        { label: 'Save', onClick: handleSubmit },
        { label: 'Close', onClick: handleClose },
      ]}
    >
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Input
            label="Price"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Selector
            label="Category"
            name="category"
            value={values.category}
            onChange={handleInputChange}
            options={[
              { value: 'Electronics', label: 'Electronics' },
              { value: 'Clothing', label: 'Clothing' },
              { value: 'Books', label: 'Books' },
            ]}
            required
          />
        </div>
        <div className="col-span-2">
          <TextArea
            label="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </Dialog>
  </>
  );


}