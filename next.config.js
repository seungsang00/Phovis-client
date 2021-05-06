const {
  NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_KAKAO_CLIENT_ID,
  NEXT_PUBLIC_KAKAO_JS_KEY,
} = process.env
module.exports = {
  images: {
    loader: 'imgix',
    domain: ['phovis.ga'],
  },
  env: {
    NEXT_PUBLIC_DOMAIN: 'https://phovis.ga',
    NEXT_PUBLIC_API_ENDPOINT: 'https://api.phovis.ga',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_KAKAO_CLIENT_ID,
    NEXT_PUBLIC_KAKAO_JS_KEY,
  },
}
