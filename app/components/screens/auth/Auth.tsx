import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

import { useAuth } from '../../../hooks/useAuth';
import { styleCenter } from '../../layout/Layout';
import Field from '../../ui/Field';
import Loader from '../../ui/Loader';

const Auth: React.FC = () => {
  const { isLoading } = useAuth();
  const [isReg, setIsReg] = useState<boolean>(false);
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
              <Field />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
