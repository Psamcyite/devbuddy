import React from 'react'
import FileTreeVisualizer from '@/components/FileTreeVisualizer'
import CodeAnalyzer from '@/components/CodeAnalyzer'

function page() {
  return (
    <>
      <div>
        <FileTreeVisualizer />
        <CodeAnalyzer />  
      </div>
    </>
  )
}

export default page