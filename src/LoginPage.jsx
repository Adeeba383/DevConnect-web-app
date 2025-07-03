import { useSearchParams, Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginPage() {
  const [params] = useSearchParams();
  const role = params.get('role') || 'user'; 

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-md w-full p-8 rounded-xl shadow-lg border border-amber-500 bg-amber-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-amber-600 mb-6">
          {role === 'developer' ? 'Developer Login' : 'User Login'}
        </h2>

        <LoginForm role={role} />

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to={`/signup-page?role=${role}`} className="text-amber-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
