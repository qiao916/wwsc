import http from '@/utils/http'
import http2 from "@/utils/http2.js";

export function getCategoryAPI () {
    return http.get('home/category/head')
}

export function getCategoryAPI2 () {
    return http2.get('home/category/head')
}