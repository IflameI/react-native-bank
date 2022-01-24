import React from 'react';
import { TextInput } from 'react-native';
import tw from 'tailwind-rn';

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: React.FC<IField> = ({ onChange, isSecure, val, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize='none'
      style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
    />
  );
};

export default Field;
