// src/app/api/perf-log/route.ts

import { NextRequest, NextResponse } from 'next/server'

interface PerfLogPayload {
  url: string
  ttfb?: number
  fcp?: number
  domLoad?: number
  windowLoad?: number
  userAgent?: string
  ip?: string
}

export async function POST(req: NextRequest) {
  try {
    const payload: PerfLogPayload = await req.json()

    // Basic validation
    if (!payload.url || typeof payload.url !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid URL' }, { status: 400 })
    }

    const log = {
      ...payload,
      timestamp: new Date().toISOString(),
    }

    console.log('[PERF LOG]', log)

    return NextResponse.json({ status: 'ok' })
  } catch (error: unknown) {
    console.error('Error logging performance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
