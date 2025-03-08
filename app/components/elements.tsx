import React from 'react';

interface InputProps {
  id?: string;
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

interface SelectorProps {
    label: string;
    name: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    className?: string;
}

interface TextAreaProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export function Input({
  id,
  label,
  name,
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
  required = false,
  className = '',
  onFocus,
  onClick,
}: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onClick={onClick}
      />
    </div>
  );
};

export function Selector({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
  className = '',
}: SelectorProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
  
export function TextArea({
    label,
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    className = '',
}: TextAreaProps) {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
}

export function Button({
    label,
    onClick,
    className = '',
}: { label: string; onClick: () => void; className?: string }) {
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    );
}