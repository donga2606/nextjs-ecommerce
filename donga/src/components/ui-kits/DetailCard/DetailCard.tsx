import React, { ReactElement } from 'react'
import StyledGlobalLayout from '../../GlobalLayout/GlobalLayout.styled'
import { Button } from '../Button'
import styles from './DetailCard.module.css'
import Link from 'next/link'
import numbro from 'numbro'

interface DetailCardProps {
  children?: React.ReactNode
  onClick?(e: React.MouseEvent<HTMLElement>): void
  buttonGroups?: React.ReactNode
  imageURL?: string
  product: Record<string, any> 
}

const DetailCard: React.FC<DetailCardProps> = ({ product }) => {
  return (
    <div className={styles.detailCardPage}>
      <div className={styles.detailCardWrapper}>
        <div className={styles.detailSlider}>
          <div className={styles.detailSliderNav}></div>
          <div className={styles.detailSliderImage}>
            {product.imageArr.map((img, index) => (
              <img key={index} id={`slider-${index + 1}`} src={img.url} alt={product.name} />
            ))}
          </div>
        </div>
        <div className={styles.detailCardInfo}>
          <h3 className={styles.detailInfoName}>{product.name}</h3>
          <div className={styles.detailInfoPrice}>
            {numbro(product.price).format({ thousandSeparated: true })} đ
          </div>
          <button className={styles.button}>ADD TO CART</button>
          <div className={styles.detailInfoDescription}>{product.description}</div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard

