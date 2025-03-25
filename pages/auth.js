import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? "Login" : "Register"}</h2>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 mb-3 border rounded-md" />
          )}
          <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-3 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-3 border rounded-md" />
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;