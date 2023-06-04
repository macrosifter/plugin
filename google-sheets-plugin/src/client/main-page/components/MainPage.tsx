import React, { useContext } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { usePlaidLink } from 'react-plaid-link';
import Context from '../Context';

const MacroSifter = () => {
  const { linkToken, isPaymentInitiation, dispatch } = useContext(Context);

  const onSuccess = React.useCallback(
    (public_token: string) => {
      // If the access_token is needed, send public_token to server
      const exchangePublicTokenForAccessToken = async () => {
        const response = await fetch('/api/set_access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: `public_token=${public_token}`,
        });
        if (!response.ok) {
          dispatch({
            type: 'SET_STATE',
            state: {
              itemId: `no item_id retrieved`,
              accessToken: `no access_token retrieved`,
              isItemAccess: false,
            },
          });
          return;
        }
        const data = await response.json();
        dispatch({
          type: 'SET_STATE',
          state: {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },
        });
      };

      // 'payment_initiation' products do not require the public_token to be exchanged for an access_token.
      if (isPaymentInitiation) {
        dispatch({ type: 'SET_STATE', state: { isItemAccess: false } });
      } else {
        exchangePublicTokenForAccessToken();
      }

      dispatch({ type: 'SET_STATE', state: { linkSuccess: true } });
      window.history.pushState('', '', '/');
    },
    [dispatch]
  );

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: linkToken!,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <div className="flex items-center align-middle justify-center mt-3">
      <Button variant="contained" size="small" type="submit">
        Import Trades
      </Button>
    </div>
  );
};

export default MacroSifter;
