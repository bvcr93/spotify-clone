import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
export default function Loading() {
  return (
    <div className="grid grid-cols-2 mt-20 gap-2 ">
    {Array.from({length: 12, }, (_, i) => i + 1).splice(10, 15).map((todo: any) => (
      <div key={todo} className="h-20  border border-pink-500">
        <Skeleton className="text-blue-500 h-6 w-1/2"></Skeleton>
        <p>lorem20</p>
    
      </div>
    ))}
  </div>
  )
}
