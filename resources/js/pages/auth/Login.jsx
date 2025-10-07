import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Head title="Log in" />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>

        {status && (
          <div className="mb-4 text-sm font-medium text-green-600 text-center">
            {status}
          </div>
        )}

        <form onSubmit={submit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
              autoComplete="username"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-10"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "👁️‍🗨️" : "🙈"}
            </button>
            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            {canResetPassword && (
              <Link
                href={route("password.request")}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Forgot your password?
              </Link>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={processing}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
              processing
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {processing ? "Logging in..." : "Log in"}
          </button>
        </form>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href={route("welcome")}
            className="text-sm text-gray-600 hover:text-indigo-700"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Sign Up */}
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href={route("register")}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign Up Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
