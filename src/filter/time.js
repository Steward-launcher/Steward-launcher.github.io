import { format } from 'timeago.js'
import dayjs from 'dayjs'

export function timeago(time) {
  return format(time, localStorage.getItem('language') || 'en');
}

export function date(time) {
  return dayjs(time).format('MM/DD/YYYY')
}