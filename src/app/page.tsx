import React from 'react'
import FileTreeVisualizer from '@/components/FileTreeVisualizer'
import CodeAnalyzer from '@/components/CodeAnalyzer'
import ReadmeGenerator from '@/components/ReadmeGenerator'

function page() {
  return (
    <>
      <div>
        <FileTreeVisualizer />
        <CodeAnalyzer />
        <ReadmeGenerator /> 
      </div>
    </>
  )
}

export default page