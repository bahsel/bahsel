import style from './height-image.module.css'

const HeightImage = ({ className, children }) => {
    return (
        <div className={`${className} ${style.wrapper}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HeightImage