import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Side from './Side'

import './OrderBook.css'

const OrderBook = ({ tests, filterId }) => {
  return (
    <Grid className="order-book">
      <h1>Order Book</h1>
      <Row>
        <Col md={6}>
          <Side
            side="Bids"
          />
        </Col>
        <Col md={6}>
          <Side
            side="Asks"
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default OrderBook