import styled from 'styled-components'

export const TopMenu = styled.nav`
background-color: #0F52BA;
width: 100%;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-between;
padding-inline: 80px;

#nav{
  display: none;
}

.containerWrapperAll{
  height: 100%;
}

#nav.open{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 30%;
  background-color: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  
  

  .containerTop{
    width: 100%;
    display: flex;
    padding-top: 36px;
    justify-content: space-around;
  }

.containerMid{
  max-height: 70%;
  overflow-y: scroll;
}

  .containerBot{
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    bottom: 0;

    button{
      color: white;
      background-color: black;
      height: 97px;

      font-size: 28px;
      font-weight: 700;
    }
  }

  .priceWrap{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 36px;
  }

  span{
    color: white;
    font-size: 27px;
    font-weight: 700;
    max-width: 180px;
  }
  button{
    height: 40px;
    background-color: transparent;
    border: none;
  }

  .containerProductCart{
    background-color: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 20px;
  height: 95px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 3;

.quantityWrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15px;
  border-radius: 4px;
  border: 0.3px solid #BFBFBF;
  .quantityProduct{
    color: black;
    font-size: 10px; 
    
   padding: 0 10px;
  }
  .quantityBtn{
  height: 15px;
  border: 0.3px solid #BFBFBF;
   padding: 0 10px;
  }
}
  
  .nameProduct{
    color: black;
    font-size: 13px;
  }
  .priceProduct{
    color: black;
    font-size: 14px;
  }

  .removeItemBtn{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -18px;
    margin-right: -8px;
  }
  }

.containerWrapper{
  display: flex;
  align-items: center;
}
  


}
`

export const WrapLogo = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
`

export const Logo = styled.div`
/* position: absolute;
left: 4.51%;
right: 86.6%;
top: 2.73%;
bottom: 92.97%; */

font-style: normal;
font-weight: 600;
font-size: 40px;
padding-right: 10px;
/* or 48% */

color: #FFFFFF;

mix-blend-mode: normal;
`

export const Sublogo = styled.div`

/* position: absolute;
left: 11.46%;
right: 74.65%;
top: 4.39%;
bottom: 91.31%; */

font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 19px;
/* or 95% */


color: #FFFFFF;

mix-blend-mode: normal;
`

export const Cartbutton = styled.button`

width: 90px;
height: 45px;
border-radius: 8px;
border: none;
display: flex;
justify-content: space-evenly;
align-items: center;

font-weight: 700;
font-size: 18px;


`
