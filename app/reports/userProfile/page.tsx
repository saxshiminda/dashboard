'use client';

import React, { useState } from 'react';
import Dialog from '@/app/components/dialog';
import { Input, Selector, TextArea } from '../../components/elements';

export default function User() {
  const [toggle, setToggle] = useState(false);

  const [values, setValues] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOpen = () => {
    console.log('Dialog opened');
  };

  const handleClose = () => {
    setToggle(false);
  };

  const handleSubmit = () => {
    console.log(values.price)
  };

  return (
    <div>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setToggle(true)}
      >
        Open modal
      </button>

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
              placeholder="Product name"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Input
              label="Price"
              name="price"
              type="number"
              value={values.price}
              onChange={handleInputChange}
              placeholder="Product price"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Selector
              label="Category"
              name="category"
              value={values.category}
              options={[
                { value: 'electronics', label: 'Electronics' },
                { value: 'clothing', label: 'Clothing' },
                { value: 'accessories', label: 'Accessories' },
              ]}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-span-2">
            <TextArea
              label="Description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              placeholder="Product description"
              required
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}