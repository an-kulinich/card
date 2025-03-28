import './App.css';
import styled from 'styled-components';
import img1 from './assets/img/picture.jpeg';


function App() {
    return (
        <div className="App">
            <Box>
                <MyImage src={img1} alt="" />
                <Header>Headline</Header>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <BtnBox>
                    <Btn1>See more</Btn1>
                    <Btn2 as={Btn1}>Save</Btn2>
                </BtnBox>
                
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    width: 300px;
    height: 350px;
    box-shadow: 0px 4px 20px 5px #0000001A;
    background-color: #FFFFFF;
    border-radius: 15px;
`

const MyImage = styled.img`
    width: 280px;
    height: 170px;
    object-fit: cover;
    margin: 10px;
    border-radius: 10px;
`

const Header = styled.h1`
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
    margin-left: 20px;
`

const Text = styled.p`
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #ABB3BA;
    margin-left: 20px;
`

const BtnBox = styled.div`
    display: flex;
`

const Btn1 = styled.button`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    background-color: #4E71FE;
    color: #FFFFFF;
    border: 2px solid #4E71FE;
    border-radius: 5px;
    margin-left: 20px;
    font-family: Inter;
    font-weight: 700;
    font-size: 10px;
    alighn-items: center;

`

const Btn2 = styled.button`
    background-color: #FFFFFF;
    color: #4E71FE;
`