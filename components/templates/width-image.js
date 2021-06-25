import style from './width-image.module.css'

const WidthImage = ({ className, children }) => {
    return (
        <div className={`${className} ${style.wrapper}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default WidthImage