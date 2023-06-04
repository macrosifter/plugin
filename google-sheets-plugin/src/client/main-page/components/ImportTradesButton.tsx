import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import Context from '../Context';

const ImportTradesButton = () => {
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

  let isOauth = false;
  if (window.location.href.includes('?oauth_state_id=')) {
    // TODO: figure out how to delete this ts-ignore
    // @ts-ignore
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }

  const { open, ready } = usePlaidLink(config);

  console.log('ready', ready);

  useEffect(() => {
    if (isOauth && ready) {
      open();
    }
  }, [ready, open, isOauth]);

  return (
    <div className="flex items-center align-middle justify-center mt-3">
      <Button
        variant="contained"
        type="button"
        size="small"
        onClick={() => open()}
        disabled={!ready}
      >
        Import Trades
      </Button>
    </div>
  );
};

export default ImportTradesButton;
