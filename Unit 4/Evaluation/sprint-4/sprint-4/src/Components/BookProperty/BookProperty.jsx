import styles from "./BookProperty.module.css"
import { SubmissionForm } from './SubmissionForm';
import { Redirect, Link } from 'react-router-dom';


export const BookProperty = ({ url, review, rating, rate, title, add }) => {




    return <>

        <div className={styles.book} >
            <Link to="/submitForm" className={styles.link}>
                <div className={styles.img}>
                    <img src={url} alt="pic" />

                </div>
            </Link>
            <div className={styles.midSection}>
                <h2>{title}</h2>
                <h3>{add}</h3>
                <div>


                    <h5>{rating} <span>({review}reviews)</span></h5>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.icon}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///+0GgCwAACzEwCyAACyDQD9+Pf67+z//fyuAADz3tvVjYXDVUn99vTJZ13gq6XSg3vLbmTqxcDx2NTu0c7OeW+4JhDjtK7BTkLGX1O+QjPEWU67MR/ZmZP25ePnvrm8OSi5KhbdpJ3Ylo/szMi/RjjThX29PC3lubTMc2m5LRvHY1h8pws/AAAFtklEQVR4nO2da1vyMAyGWQ9jMsdBDiIiAh5Q+f//7+0EeVV26NqkC165+Z4rz5pmadaWTodhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZh/h5Z15AAGUtyYxmQMW/i8WB4v5QiR83mo4ebroe17s3DaD5Tn9bk8n44GMdgnro5dLvXRpiW0QEptRJql06crE3SncqNnawZY0Lub30emR/PfSV0dI5UYpOuGhpbpRuhZIE1LVT/GcX/Oh7XhfJOIu+bDOTzdbG8L5HrRzQdZUxeRLlHR7eubTVO5hUP6/DExItb5LuSTOtcOmjs20yh7sjO2BQqVVswjlS9Swe3HmqNPShLYyoaB9D2yaBiyvxGLHqVtnoLYW1LikEYga/2Phm0uq2wNVAWAfrteb2GEDhtJNBw9V5q6/2qoS0xJSjQuDUvrsCyuYMtdIlpc6dMjtgU5dTVrFGEfklMcQUOXATmk/E83/Qa5KsfEqvmtTdjy8R+htS/Jfa0m0ATEdXZ2YskcvXKlHE/C9WV4wjmpj7wFE5dhzD3S36X6CHQDOIQS+Cz2yQ8or+lm+7MQ6CZilhrjaWXW5FenyztXLLof+S61EcvHryG0KD6R0sjj2j/xKLcdSDzdcs4tv20tPV9VOZhYXRxnvwVRipfHYz9BUbqCV5g5jd1Dsgo6SR+WeYIwiAChFbu2NTrlfPNEPhMhHnyxrNXEIGRnEGv+B9BhjCKbLsDtYgbYIV3ENMQEr2HFZhBDSEcAjbX3BJUCLuK6lMLUhOm/Xq37UnallMIZDad0AtSE6aQXfAtVI6HRG0BFRKchsDvC6CCBhYZwQlcUQxSE6ZNv1GW49e+QAOwcCOZaEBTzZCoQrie255iKgVNpi8UU6lJpi9gCjdEFW7AFNKchmYiQgnMmn7HDIWA2jDVpfk6NAqhdkuxwtZghazwRExV4RVYu+3Pvw9pLoDzzj6YQqJ1qb4GUzgiurYYgSlMaU5EBbc9imBPPwewrw/xXRoBAbejNiYapYBnMeYUk6mcwwmkmWoAEw3Rhino3q+MZJSCfgQm9xnfvO/vIAW67g3GBPhowt/fqdC5phamgGX3AXKFG/iG9phaNoXfukfs+5OCP1nSoxWmgFX3iXtKuUZD1qRf3FAaRIFyanZNJ9kgHSoB22LqD84QEmq5yQWOQDozEXx/8AkipZu+xxJI5Z0oEI/nwZwk8AShnPlPJttPNjJCve6EwBJDvGEKJJBsgJsX53Tbnokop9Z+0HLHBvck94F9mxIV6BGEEjL3A93eyFmQa6NabICDHkCo4KktiTjHf4vYt5NQFfBxtQpiz3PrbshlwLvbWjmeAHj4wIIWlop4i8JiYA4+NxEIecrJimFYiQLtto9y+iHnYpBa5ox5OIkKowFcT7wOtZLSu5bu+IyXYSTqTWuXmGa7EIGqC28KC0S8wJcooxYFdjoJukQtg5Yy58TIGVUvWx3BnARVolpQuBIaUaLA6983IbnDkijKb80MzB1OjXoV5LZSO94xJIbrWdjgfZdbgcAAndEm3NZdft0QGXrBW89EQxapWgW799me1QdcSlUfLRcyxcQO1wIXI+Yt/yNCKc3uwS4XSOgt8ZtHn4tXj0iF/AnUj9XSdzKqD8R9CBAkI79IFaOA/w/gyNYjUiXo3U9ojGeukapmBN+CRZhIdRpG0acfoV+8ORQ4WgX6bwcYutdNE45YkyxjKmj2zxVSIFwMjM3qxX4YxfJCUswvniwTjhTp5aSYn4yXNsN4qQP4SZLWDqO+3AE80FtXD6PYES9DLdhWJFV9GVVaHd19SahKsW+9ZQ/EzawoVEVErtnkwdPZX48pjMv/22T1sxqXYnRpRVo9k8VJoxSLsP/1F4q343QUM9KdGB+SrVTmt73sV3w1WRqlFL55MgzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAyDxD9fFmFhJsvc1wAAAABJRU5ErkJggg==" alt="img" />
                </div>
                <div>
                    <h3>{rate}/night</h3>
                </div>
            </div>

        </div>

    </>
}