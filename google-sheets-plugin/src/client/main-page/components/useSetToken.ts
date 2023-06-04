import { useCallback, useContext, useEffect } from 'react';
import Context from '../Context';

const useSetToken = () => {
  const { dispatch } = useContext(Context);

  const generateToken = useCallback(async () => {
    // Link tokens for 'payment_initiation' use a different creation flow in your backend.
    const path = '/api/create_link_token';

    const response = await fetch(path, {
      method: 'POST',
    });
    if (!response.ok) {
      dispatch({ type: 'SET_STATE', state: { linkToken: null } });
      return;
    }
    const data = await response.json();
    if (data) {
      if (data.error != null) {
        dispatch({
          type: 'SET_STATE',
          state: {
            linkToken: null,
            linkTokenError: data.error,
          },
        });
        return;
      }
      dispatch({ type: 'SET_STATE', state: { linkToken: data.link_token } });
    }
    // Save the link_token to be used later in the Oauth flow.
    localStorage.setItem('link_token', data.link_token);
  }, [dispatch]);

  useEffect(() => {
    const init = async () => {
      // do not generate a new token for OAuth redirect; instead
      // setLinkToken from localStorage
      if (window.location.href.includes('?oauth_state_id=')) {
        dispatch({
          type: 'SET_STATE',
          state: {
            linkToken: localStorage.getItem('link_token'),
          },
        });
        return;
      }
      generateToken();
    };
    init();
  }, [dispatch, generateToken]);
};

export default useSetToken;
