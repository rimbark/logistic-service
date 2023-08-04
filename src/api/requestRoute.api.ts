import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { RequestMethod } from 'types/requestMethod.types'

const BASE_URL = 'https://router.project-osrm.org'

export async function requestRoute<T>(url: string, method: RequestMethod, data?: any): Promise<T> {
  const headers = { 'Content-Type': 'application/json' }
  const config: AxiosRequestConfig = { method, url: `${BASE_URL}${url}`, headers, data }
  try {
    const response: AxiosResponse<T> = await axios(config)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('An error occurred')
    }
  }
}
