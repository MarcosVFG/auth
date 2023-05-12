'use client';

import LoginPage from "./LoginPage/page"
import { AuthProvider } from "./auth";

export default function Home() {
  return (
    <main>
      <div>
      <AuthProvider>
        <LoginPage/>
      </AuthProvider>
      </div>
    </main>
  )
}
