import styled from "styled-components"
export default function ItemBeneficio(props){
    const {titulo, link} = props
    return(
        <>
        <ItemDiv><a href={link}>{titulo}</a></ItemDiv>
        </>
    )
}

const ItemDiv = styled.div`
  width: 299px;
  height: 52px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#FF4791;
  border-radius: 10px;
  margin-top: 10px;
  a{
    color: #FFFFFF;
  text-decoration: none;
  }

`