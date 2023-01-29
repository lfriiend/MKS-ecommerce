import styled from 'styled-components'

export const ProductContainer = styled.div`
background-color: #FFFFFF;
width: 250px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
margin: 1%;
border-radius: 8px;
position: relative;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

.titleWrapper{
  width: 100%;
display: flex;
justify-content: space-between;
align-items: baseline;

.productName {
  font-size: 16px;
line-height: 19px;
font-weight: 400;
color: #2C2C2C;
}

.productPrice{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 5px;
height: 26px;
background-color: #373737;
border-radius: 5px;
color: #FFFFFF;
font-weight: 800;
}
}

.productDescription {
  
padding-top: 5px;
color: #2C2C2C;
font-size: 10px;
line-height: 12px;
font-weight: 300;
}

.productButton{
  background-color: #0F52BA;
border: none;
width: 100%;
padding: 10px;
border-radius: 0 0 8px 8px;
position: absolute;
bottom: 0;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;

span{
  padding-inline: 10px;
}
}
`