export const dogData = [
  {
    dogName: '비숑 프리제',
    id: '5a1e44556507b624c469bae3'
  },
  {
    dogName: '포메라니안',
    id: '5a1e44ba6507b624c469baea'
  },
  {
    dogName: '라브라도 리트리버',
    id: '5a1e44106507b624c469badf',
  },
  {
    dogName: '치와와',
    id: '5a1e44ac6507b624c469bae9'
  },
  {
    dogName: '토이 푸들',
    id: '5a1e44c86507b624c469baeb'
  },
  {
    dogName: '말티즈',
    id: '5a1e44356507b624c469bae1'
  },
  {
    dogName: '베들링턴 테리어',
    id: '5a1e44466507b624c469bae2'
  },
  {
    dogName: '셔틀랜드 쉽독',
    id: '5a1e44676507b624c469bae4'
  },
  {
    dogName: '시바 이누',
    id: '5a1e44746507b624c469bae5'
  },
  {
    dogName: '이탈리안 그레이하운드',
    id: '5a1e44906507b624c469bae7'
  },
  {
    dogName: '잭 러셀 테리어',
    id: '5a1e449f6507b624c469bae8'
  },
  {
    dogName: '페키니즈',
    id: '5a1e44d56507b624c469baec'
  },
  {
    dogName: '아메리칸 불리',
    id: '5a1e44e16507b624c469baed'
  },
  {
    dogName: '요크셔테리어',
    id: '5a275dae33d5ee2510639fd1'
  },
  {
    dogName: '골든 리트리버',
    id: '5ab34b8d40c8f949a1b33d6e'
  },
  {
    dogName: '웰시코기',
    id: '5ab34cb640c8f949a1b33d6f'
  },
  {
    dogName: '코커 스패니얼',
    id: '5ab34f8809d24d292f2a6891'
  },
  {
    dogName: '도베르만',
    id: '5ab34f9309d24d292f2a6892'
  },
  {
    dogName: '보더콜리',
    id: '5ab34fa809d24d292f2a6893'
  }
]

export const suggestDogData = dogData.slice(0, 5)

export const filterDogData = dogData.sort((a, b) => {
  if (a.dogName > b.dogName) return 1
  if (a.dogName < b.dogName) return -1
  return 0
})
