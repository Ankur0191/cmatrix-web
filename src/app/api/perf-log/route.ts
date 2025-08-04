import { NextRequest, NextResponse } from 'next/server'

// Define a basic schema (can replace with zod later)
interface PerfLog {
  page: string
  loadTime: number
  domLoad: number
  ttfb: number
  userAgent: string
  timestamp: string
}

function isValidLog(log: any): log is PerfLog {
  return (
    typeof log.page === 'string' &&
    typeof log.loadTime === 'number' &&
    typeof log.domLoad === 'number' &&
    typeof log.ttfb === 'number' &&
    typeof log.userAgent === 'string' &&
    typeof log.timestamp === 'string'
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!isValidLog(body)) {
      return NextResponse.json({ error: 'Invalid log format' }, { status: 400 })
    }

    // Optional: block bots, crawlers
    if (/bot|crawl|spider/i.test(body.userAgent)) {
      return NextResponse.json({ ignored: true }, { status: 200 })
    }

    console.log('✅ Performance Log:', body)

    // 🔒 TODO: Store in Firestore or Supabase instead
    // await db.collection('perfLogs').add(body)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Error logging performance:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
