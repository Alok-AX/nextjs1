import React from 'react';
import { handleGithubLogin } from '../../../../lib/action';

const LoginPage = async  () => {
  

  return (
    <div> 
      <form action={handleGithubLogin}>
      <button> login with github</button>

      </form>
    </div>
  )
}

export default LoginPage
