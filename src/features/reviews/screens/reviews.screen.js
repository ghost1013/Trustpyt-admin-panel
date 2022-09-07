import React from 'react'
import Header from '../../../creativeCommons/header/header.component'
import ReviewsTable from '../components/reviews-table.component'

const ReviewsScreen = () => {
  return (
    <>
    <Header title="Reviews"/>
    <br/>
    <ReviewsTable/>
    </>
  )
}

export default ReviewsScreen