import { describe, it, expect } from 'vitest'

describe('Demo App Tests', () => {
  it('should pass basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should test environment variables', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })

  it('should demonstrate Nx caching for tests', () => {
    // Simple test to show that test caching works
    const testValue = 'nx-vite-cache-demo'
    expect(testValue).toContain('nx')
    expect(testValue).toContain('vite')
    expect(testValue).toContain('cache')
  })
})