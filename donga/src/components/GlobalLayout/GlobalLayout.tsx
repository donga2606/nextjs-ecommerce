
import { Footer } from '../Footer';
import { HeaderCustom } from '../HeaderCustom';
import Notify from '../Notify/Notify';
import StyledGlobalLayout from './GlobalLayout.styled'

const GlobalLayout = (props) => {
    return (
        <StyledGlobalLayout>
            <HeaderCustom />
            <Notify />
            {props.children}
            <Footer/>
        </StyledGlobalLayout>
    )
}

export default GlobalLayout;