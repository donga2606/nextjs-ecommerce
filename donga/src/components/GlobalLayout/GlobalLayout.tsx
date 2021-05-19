import StyledGlobalLayout from './GlobalLayout.styled'

const GlobalLayout = (props) => {
    return (
        <StyledGlobalLayout>{props.children}</StyledGlobalLayout>
    )
}

export default GlobalLayout;