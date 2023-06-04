import React from 'react';
import ImportTradesButton from './ImportTradesButton';
import useSetToken from './useSetToken';

const MacroSifter = () => {
  useSetToken();

  return (
    <div className="flex items-center align-middle justify-center mt-3">
      <ImportTradesButton />
    </div>
  );
};

export default MacroSifter;
