import axios from '../utils/axios'
const getHomeData = () => {
  const url = 'http://8.129.8.217:8888/goods/all?page=1&num=100'
  url.substring(0, 3)
  console.log(url)
  return axios.get(url)
}
const getSortData = (page, num) => {
  const url = `http://8.129.8.217:8888/goods/all?page=${page}&num=${num}`
  return axios.get(url)
}
export { getHomeData, getSortData }
