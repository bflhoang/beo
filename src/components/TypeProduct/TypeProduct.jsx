import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WrapperType } from './styled'

const TypeProduct = ({ name }) => {
  const navigate = useNavigate()
  const handleNavigatetype = (type) => {
    navigate(`/product/${type.normalize('NFD').replace(/[\u0300-\u036f]/g, '')?.replace(/ /g, '_')}`, {state: type})// bo di dau tieng viet va tao khoang cach
  }
  return (
    <WrapperType onClick={() => handleNavigatetype(name)}>{name}</WrapperType>
  )
}

export default TypeProduct
