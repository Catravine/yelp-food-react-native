import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer z7hBRU3juiShET_Y7awIIh39uTYFYPXxl86v7KdLVJL-spHDiKHlqO7AwOFyWkP8rOm8Dyg5SONlCPZElbQhbfrSIh2IbCTppblEuZOQxM_2EN1rz9PHZH6s0NqEZHYx'
  }
});