const Paper = ({children, color, shadowColor, gap, ...props}) => {
    const styles = {
        backgroundColor: color ? color : undefined,
        boxShadow: shadowColor ? "5px -5px "+shadowColor : undefined,
        gap: gap ? gap : undefined
    }
    return (
        <div className="paper" style={styles} {...props}>
            {children}
        </div>
    )
}

export default Paper;