import styles from "./header.module.css";
import {HeaderMobile} from "../mobile/header-mobile/header-mobile";
import {Title} from "../title/title";
import Login from "../login/login";
import {useCheckPositionHeader} from "../../core/hooks/header/useCheckPositionHeader";
import Links from "../links/links";


const Header = () => {
    const {small} = useCheckPositionHeader()

    return (
        <>
            <div className={styles.header_mobile}>
                <HeaderMobile/>
            </div>
            <div className={small ? styles.root : `${styles.border} ${styles.root}`}>
                <div className={styles.logo}>
                    <Title size={35}/>
                </div>
                <div className={styles.links}>
                    <Links/>
                </div>

                {/*<Login/>*/}
            </div>
        </>
    );
};
export {Header};
