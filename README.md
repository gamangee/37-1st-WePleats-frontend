![wepleats_bar](https://user-images.githubusercontent.com/84329979/202771638-84c9b117-4a25-4696-8719-d67512056d24.jpg)

### 프로젝트 소개
`WePleats`는 밋밋하고 칙칙한 현대인의 책상을 보다 다채로운 색상의 제품을 판매하는 사이트입니다. 기존의 제품 카테고리와 더불어 색상별로 제품을 검색해주는 컬러필터링 기능까지 있는 것이 특징입니다.
<br><br>
### 📌 선정 이유
우리는 하루 대부분의 시간을 책상 앞에 앉아 일을 합니다.
문득 현대인의 필수품인 컴퓨터, 키보드, 마우스 등 거의 모든 전자기기가 검은색 아니면 회색이라는 점이 아쉽다는 생각이 들었습니다.
실제로 사용자가 좋아하는 색으로 책상을 좀 더 화사하게 꾸밀 수 있는 제품과 사이트가 있었으면 좋겠다는 생각에서 프로젝트를 시작하게 되었습니다.
<br><br>
### 개발 인원 및 기간
`기간` : 2022/9/19 ~2022/9/30 <br>
`인원` : 프론트엔드 3명, 백엔드 2명
<br><br>
### 구현 기능

#### 1. 제품 상세페이지 동적 라우팅
- `Product` 컴포넌트에서는 제품의 아이디를 `useParams` 훅을 통해 가져오고, 이를 기반으로 제품의 정보를 API를 통해 가져옵니다. 받아온 제품 정보는 `useState`를 통해 `product` 상태에 저장하고 화면에 보여주었습니다.
  
#### 2. 사용자에게 중요한 정보 고정 스크롤
- 사용자에게 중요한 가격 정보는 계속 노출할 수 있도록 css의 position `sticky` 속성을 활용하였습니다. 사용자가 스크롤을 내렸을 때 제품 가격 정보를 보여주는 우측 컨텐츠는 고정이고, 컨텐츠가 비교적 긴 좌측 제품 상세페이지에만 스크롤 가능하게 만들었습니다.

#### 3. 썸네일 마우스 호버에 따른 메인 이미지 변경
- `getUrl` 함수를 통해 마우스 오버 이벤트가 발생한 이미지의 URL을 `currentUrl` 상태에 저장하고, 이를 메인 이미지로 사용하여 화면에 표시합니다.

#### 4. 리뷰 페이지 페이지네이션
- `Review` 컴포넌트에서는 제품에 대한 리뷰를 API를 통해 가져옵니다. 가져온 리뷰는 `useState`를 통해 `reviews` 상태에 저장하고, `movePage`, `movePrevious`, `moveNext` 함수를 통해 페이지 이동 기능을 구현합니다.

#### 5. 리뷰 등록, 추가, 삭제 기능
- `clickedModal` 함수를 통해 리뷰 작성 모달의 표시 여부를 제어하고, `editedModal` 함수를 통해 리뷰 수정 모달의 표시 여부를 제어합니다. 모달에서 리뷰 작성 또는 수정을 완료하면 리뷰 목록이 갱신됩니다.
- `deleteThis` 함수를 통해 특정 리뷰를 삭제할 수 있습니다. 리뷰 삭제 후에도 리뷰 목록이 갱신됩니다.

#### 6. 리뷰 필터링
- `setIsFiltered` 함수를 통해 이미지가 첨부된 리뷰만 표시하는 필터링 기능을 구현하였습니다. 이 기능은 리뷰 목록을 `isFiltered` 상태에 따라 필터링하여 화면에 표시합니다.

<br>

### 적용 기술
<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
</div>

<br>

### 회고
#### 
[👉 기술블로그 바로가기](https://velog.io/@gamangee/WEPLEATS-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B5%9C%EC%A2%85-%ED%9A%8C%EA%B3%A0)

<br>

### 구현 기능

#### 1. Nav, Footer
![nav](https://user-images.githubusercontent.com/84329979/193393550-cafb8a2b-aa6a-4826-9ffb-cd43e47f1548.gif)
![image](https://user-images.githubusercontent.com/84329979/193393566-d8bec7f6-d49b-448e-9650-c87b8cbdf55d.png)

#### 2. 제품 상세 & 리뷰
![detail-review](https://user-images.githubusercontent.com/84329979/193393386-4a6a6562-762b-4775-bb9c-ae391d9f8dd7.gif)

<br>

## Reference

- 이 프로젝트는 [플리츠마마](https://pleatsmama.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
