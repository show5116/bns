import React from 'react'
import * as S from './ContactItem.style'

interface IProps {
  title: string
  content: string
  link?: string
  children: JSX.Element
}

const ContactItem = ({ title, content, link, children }: IProps) => {
  const isLink = link === undefined

  return (
    <S.Container>
      <S.ImageContainer>
        {isLink ? (
          children
        ) : (
          <a href={link} target="_blank">
            {children}
          </a>
        )}
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Container>
  )
}

export default ContactItem
