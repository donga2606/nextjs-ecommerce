import React, { ReactElement } from 'react'
import StyledGlobalLayout from '../../GlobalLayout/GlobalLayout.styled'
import { Button } from '../Button'
import styles from './DetailCard.module.css'
import Link from 'next/link'

// import {
//     StyledDetailCard,
//     StyledDetailCardBody,
//     StyledDetailCardImage,
//     StyledDetailCardImageWrapper,
//     StyledDetailCardPriceButton,
//     StyledDetailCardText
// }
// from './DetailCard.styled'

interface DetailCardProps {
  children?: React.ReactNode
  onClick?(e: React.MouseEvent<HTMLElement>): void
  buttonGroups?: React.ReactNode
  imageURL?: string
  product: Record<string, any>
  // alt: string
}

const DetailCard: React.FC<DetailCardProps> = ({ product }) => {
  return (
    <div className={styles.detailCardPage}>
      <div className={styles.detailCardWrapper}>
        <div className={styles.detailSlider}>
          <div className={styles.detailSliderNav}>
            {/* {product.imageArr.map((img, index) => (
              <Link href={`#slider-${index + 1}`}>
                <a key={index} className={styles.slideNavDot}></a>
              </Link>
            ))} */}
          </div>
          <div className={styles.detailSliderImage}>
            {product.imageArr.map((img, index) => (
              <img key={index} id={`slider-${index + 1}`} src={img} alt={product.name} />
            ))}
          </div>
        </div>
        <div className={styles.detailCardInfo}>
          <h3 className={styles.detailInfoName}>{product.name}</h3>
          <div className={styles.detailInfoPrice}>{product.price}</div>
          <button className={styles.button}>ADD TO CART</button>
          <div className={styles.detailInfoDescription}>{product.description}</div>
        </div>
      </div>
    </div>
  )
}

{
  /* <StyledDetailCard>
        <StyledDetailCardImageWrapper>
            <StyledDetailCardImage src = {product.imageArr[0]} alt={product.name} height={420} width={327}></StyledDetailCardImage>
        </StyledDetailCardImageWrapper>
        <StyledDetailCardBody>
            <StyledDetailCardText>
                <h1>{product.name}</h1>
                <h2>{product.by}</h2>
                <p>{product.description}</p>
            </StyledDetailCardText>
            <StyledDetailCardPriceButton>
            <p><span>{product.price}</span></p>
            
            </StyledDetailCardPriceButton>
        </StyledDetailCardBody>
</StyledDetailCard> */
}

export default DetailCard
