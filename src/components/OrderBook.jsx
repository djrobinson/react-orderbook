import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Side from './Side'

import './OrderBook.css'

const OrderBook = ({ title, initialBook }) => {
  return (
    <Grid className="order-book">
      <h1>{title}</h1>
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