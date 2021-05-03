import { IUser, IPhoto, IPhotoCard, IContent } from '@interfaces'

/** Dummy user data. */
export const sampleUserData: IUser[] = [
  { id: 101, name: 'Alice', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 5 },
  { id: 102, name: 'Bob', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 3 },
  {
    id: 103,
    name: 'Caroline',
    imgUrl: 'https://bit.ly/3euIgJj',
    contentCount: 15,
  },
  { id: 104, name: 'Dave', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 8 },
]

export const samplePhotoCardData: IPhotoCard[] = [
  {
    id: '1qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081256_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: 'https://bit.ly/3euIgJj',
    like: 30,
  },
  {
    id: '2qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2020/11/07/23/22/beach-5722568__340.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: 'https://bit.ly/3euIgJj',
    like: 30,
  },
  {
    id: '3qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2020/10/27/20/17/lake-5691800_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: 'https://bit.ly/3euIgJj',
    like: 30,
  },
  {
    id: '4qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: 'https://bit.ly/3euIgJj',
    like: 30,
  },
  {
    id: '5qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2021/01/08/17/56/river-5900547__340.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: 'https://bit.ly/3euIgJj',
    like: 30,
  },
]

/** Dummy photo image data. */
export const samplePhotoData: IPhoto = {
  photoUrl_v: 'https://bit.ly/3xtuSOy',
  photoUrl_s: 'https://bit.ly/3xtteMS',
  photoUrl_h: 'https://bit.ly/32RvRK2',
}

export const sampleContents: IContent[] = [
  {
    contentid: '1asdfzxcv',
    imageid: 1,
    imageurl:
      'https://file.mk.co.kr/meet/neds/2013/05/image_readbot_2013_394957_1369187781924822.jpg',
    description:
      '구로구에는 오래된 기찻길이 있다. 서울에서는 기찻길을 걸을 수 있는 곳이 흔치 않지만 이 곳에서는 많은 사람들이 산책로로, 사진을 위한 출사지로도 애용하는 장소, 구로구 항동 기찻길이다. 쭉 이어진 기찻길 초입에는 단지 내 주민들이 놀고있지만, 좀 더 걷다 보면 약간은 시골의 옛 풍경을 옮겨놓은 듯한 모습을 발견할 수 있다. 오래된 표지판이나 산책을 나온 부부, 철도 중간에 핀 초록색 풀이나 들꽃의 아이러니한 조화도 모두 항동 기찻길에서만 만나볼 수 있는 하나의 사진 포인트가 될 수 있다.',
    title: '야경이 아름다운 창덕궁입니다',
    location: '구로구 항동',
    user: {
      id: 5,
      name: 'sim',
      imgUrl: 'https://bit.ly/3gV8yqZ',
    },
    likecount: 42,
    images: [
      {
        id: 24,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readtop_2013_394957_1369187780924820.jpg',
        type: 'content',
      },
      {
        id: 21,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readbot_2013_394957_1369187781924822.jpg',
        type: 'content',
      },
      {
        id: 35,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924823.jpg',
        type: 'content',
      },
      {
        id: 58,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924824.jpg',
        type: 'content',
      },
    ],
  },
  {
    contentid: '2asdfzxcv',
    imageid: 23,
    imageurl:
      'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924826.jpg',
    description:
      '외국인뿐 아니라 내국인들도 한 번쯤은 꼭 가보는 명소, 북촌한옥마을. 많은 관광객이 다녀가도 조용한 풍경을 자랑하는 이 곳은 우리나라의 옛 것을 이어나가는 과거의 흔적과 현재의 아름다움이 함께 공존하고 있다. 작은 골목길 사이사이에 숨어있는 북촌 8경은 한옥마을에서 만날 수 있는 가장 기억에 남는 풍경을 담은 지점. 네모난 포토존을 찾아보는 것도 좋지만, 그 사이 아무 곳에서나 볼 수 없는 한옥의 아름다움을 못보고 지나치는 과오는 범하지 말자.',
    title: '과거와 현재가 공존하는 장소 북촌한옥마을',
    location: '북촌한옥마을',
    user: {
      id: 5,
      name: 'jeong',
    },
    likecount: 42,
    images: [
      {
        id: 24,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readtop_2013_394957_1369187780924820.jpg',
        type: 'content',
      },
      {
        id: 21,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readbot_2013_394957_1369187781924822.jpg',
        type: 'content',
      },
      {
        id: 35,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924823.jpg',
        type: 'content',
      },
      {
        id: 58,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924824.jpg',
        type: 'content',
      },
    ],
  },
  {
    contentid: '3asdfzxcv',
    imageid: 261,
    imageurl:
      'https://cdn.pixabay.com/photo/2019/05/27/19/22/asia-4233412_960_720.jpg',
    description:
      '외국인뿐 아니라 내국인들도 한 번쯤은 꼭 가보는 명소, 북촌한옥마을. 많은 관광객이 다녀가도 조용한 풍경을 자랑하는 이 곳은 우리나라의 옛 것을 이어나가는 과거의 흔적과 현재의 아름다움이 함께 공존하고 있다. 작은 골목길 사이사이에 숨어있는 북촌 8경은 한옥마을에서 만날 수 있는 가장 기억에 남는 풍경을 담은 지점. 네모난 포토존을 찾아보는 것도 좋지만, 그 사이 아무 곳에서나 볼 수 없는 한옥의 아름다움을 못보고 지나치는 과오는 범하지 말자.',
    title: '과거와 현재가 공존하는 장소 북촌한옥마을',
    location: '북촌한옥마을',
    user: {
      id: 5,
      name: 'jeong',
    },
    likecount: 42,
    images: [
      {
        id: 24,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readtop_2013_394957_1369187780924820.jpg',
        type: 'content',
      },
      {
        id: 21,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image_readbot_2013_394957_1369187781924822.jpg',
        type: 'content',
      },
      {
        id: 35,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924823.jpg',
        type: 'content',
      },
      {
        id: 58,
        imageurl:
          'https://file.mk.co.kr/meet/neds/2013/05/image__2013_394957_1369187781924824.jpg',
        type: 'content',
      },
    ],
  },
]
