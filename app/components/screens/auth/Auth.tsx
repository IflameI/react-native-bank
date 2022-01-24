import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-rn';

import { useAuth } from '../../../hooks/useAuth';
import { styleCenter } from '../../layout/Layout';
import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Loader from '../../ui/Loader';

interface IData {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const { isLoading, login, register, user } = useAuth();

  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState<boolean>(false);

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    setData({} as IData);
  };
  console.log(user);
  return (
    <View style={styleCenter}>
      <View style={tw('mx-5 justify-center items-center h-full')}>
        <View style={tw('w-9/12')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                val={data.email}
                placeholder='Enter email'
                onChange={(val) => setData({ ...data, email: val })}
              />
              <Field
                val={data.password}
                placeholder='Enter password'
                onChange={(val) => setData({ ...data, password: val })}
                isSecure={true}
              />

              <Button onPress={authHandler} title={`Let's go`} />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
