
import styled from 'styled-components';
import myImage from './Screenshot (20).png'; // استيراد الصورة

const ImageBackground = styled.div`
  width: 100%;
  height: 100vh; /* يجعل العنصر يغطي كامل ارتفاع العرض */
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;
`;

const MyComponent = () => {
  return (
    <ImageBackground>
      {/* محتوى آخر يمكن إضافته هنا */}
    </ImageBackground>
  );
}

export default MyComponent;
