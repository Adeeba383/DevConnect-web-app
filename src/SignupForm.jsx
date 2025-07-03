import { useState } from 'react';

function SignupForm({role}) {
  const [formData, setFormData] = useState({
    email: '', password: '', name: '', stack: '', github: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Submitted! (Not implemented)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" type="text" placeholder="Full Name" required className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" onChange={handleChange} />

      {role === 'developer' && (
        <>
          <input name="stack" type="text" placeholder="Tech Stack (e.g. React, Node)" required className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="github" type="url" placeholder="LinkedIn or GitHub URL" required className="w-full p-2 border rounded" onChange={handleChange} />
        </>
      )}
      <button type="button" disabled className="w-full p-2 bg-gray-200 text-gray-600 rounded">
        Continue with Google (placeholder)
      </button>
      <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
