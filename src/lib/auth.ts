import { NextAuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"
import type { ApiResponse, AuthTokenResponse } from "@/types/api"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (!parsedCredentials.success) return null

        const { email, password } = parsedCredentials.data

        try {
          // Step 1: Login to get the access token
          const loginResponse = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })

          if (!loginResponse.ok) return null

          const loginData: ApiResponse<AuthTokenResponse> = await loginResponse.json()

          // Check if login was successful
          if (!loginData.isSuccess || !loginData.value?.access_token) {
            console.error("Login failed:", loginData.hasErrors)
            return null
          }

          const { access_token } = loginData.value

          // Step 2: Fetch user data using the access token
          const userResponse = await fetch(`${API_URL}/api/auth/me`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          })

          if (!userResponse.ok) {
            console.error("Failed to fetch user data")
            return null
          }

          const userData = await userResponse.json()

          // Handle both ApiResponse format and direct user object
          const user = userData.isSuccess ? userData.value : userData

          if (!user?.id || !user?.email) {
            console.error("Invalid user data received")
            return null
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name || user.email,
            accessToken: access_token,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.accessToken = (user as any).accessToken
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        ;(session as any).accessToken = token.accessToken as string
      }
      return session
    },
  },
}

// Helper function to get session in server components
export const auth = () => getServerSession(authOptions)
