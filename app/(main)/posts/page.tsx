import BackButton from '@/components/BackButton'
import PostsTable from '@/components/posts/PostsTable'
import PostsPagination from '@/components/posts/PostsPagination'
import React from 'react'

const Posts = () => {
  return (
   <>
        <BackButton link='/' text='Go Back'/>
        <PostsTable />
        <PostsPagination />
   </>
  )
}

export default Posts