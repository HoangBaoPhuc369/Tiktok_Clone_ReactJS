import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image  className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_300x300.webp?x-expires=1657728000&x-signature=zFx56s9iTXM6SSTFEvoGR6EgCyQ%3D' alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Bao Phuc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>phuchoang@</span>
            </div>
        </div>
     );
}

export default AccountItem;