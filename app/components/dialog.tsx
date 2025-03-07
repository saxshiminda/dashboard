'use client';

import React, { useState, useEffect } from 'react';

interface DialogProps {
  toggle: boolean;
  title: string;
  children: React.ReactNode;
  buttons: { label: string; onClick: () => void }[];
  onClose: () => void;
  onOpen: () => void;
  values: { [key: string]: any };
}

export default function Dialog({ toggle, title, children, buttons, onClose, onOpen, values }: DialogProps) {

  useEffect(() => {
    if (toggle) {
      onOpen();
    } else {
      onClose();
    }
  }, [toggle, onClose, onOpen]);

  return (
    <>

      {toggle && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  onClick={() => {
                    onClose();
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5">
                {children}
                <div className="flex justify-end space-x-2 mt-4">
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      type="button"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}