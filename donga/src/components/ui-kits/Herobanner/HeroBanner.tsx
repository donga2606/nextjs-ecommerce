import { FC } from 'react'
import {
    StyledHeroBanner,
    StyledHeroText, 
} from './Herobanner.styled'

const HeroBanner: React.FC = (props) => {
    return (
        <StyledHeroBanner>
            <StyledHeroText>
                <h1>Ví Da Nam</h1>
                <div>Tạo nên từ chất liệu da bò nhập khẩu cao cấp, tỉ mỉ trong từng đường chỉ nét khâu, bạn sẽ cảm nhận được sự đẳng cấp và khác biệt trong mỗi chiếc ví của Leonardo.</div>
            </StyledHeroText>
        </StyledHeroBanner>
    )
}
export default HeroBanner