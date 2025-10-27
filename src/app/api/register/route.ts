import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import type { ApiResponse, AuthTokenResponse } from '@/types/api'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = registerSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          isSuccess: false,
          hasErrors: validation.error.issues.map(issue => issue.message)
        },
        { status: 400 }
      )
    }

    const { email, password, name } = validation.data

    // Forward the request to the NestJS backend
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    const data: ApiResponse<AuthTokenResponse> = await response.json()

    // Check if registration was successful
    if (!response.ok || !data.isSuccess) {
      return NextResponse.json(
        {
          isSuccess: false,
          hasErrors: data.hasErrors || ['Failed to create user']
        },
        { status: response.status }
      )
    }

    // Return the response in the same format as the backend
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      {
        isSuccess: false,
        hasErrors: ['Failed to create user']
      },
      { status: 500 }
    )
  }
}
