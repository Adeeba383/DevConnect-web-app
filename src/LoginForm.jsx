function LoginForm() {
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      
      <button type="button" disabled className="w-full p-2 bg-gray-200 text-gray-600 rounded">
        Continue with Google (placeholder)
      </button>

      <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
