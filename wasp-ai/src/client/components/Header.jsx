import { StatusPill } from './StatusPill';
import { Title } from './Title';
import { signInUrl as gitHubSignInUrl } from '@wasp/auth/helpers/GitHub';
import { AiFillGithub } from 'react-icons/ai';
import useAuth from '@wasp/auth/useAuth';

export function Header({ currentStatus, isStatusVisible }) {
  const { data: user } = useAuth();

  return (
    <div className='mb-4 bg-slate-50 p-8 rounded-xl md:flex justify-between items-center'>
      <Title />
      {!!user && isStatusVisible ? (
        <StatusPill status={currentStatus.status} className='hidden md:flex'>
          {currentStatus.message}
        </StatusPill>
      ) : (
        <GithubLoginButton />
      )}
    </div>
  );
}

function GithubLoginButton() {
  return (
    <button
      className='button gray flex !text-gray-800 hover:bg-slate-300 shadow-md'
      onClick={() => (window.location.href = gitHubSignInUrl)}
    >
      <AiFillGithub className='w-6 h-6 mr-2' /> Sign in with GitHub
    </button>
  );
}
