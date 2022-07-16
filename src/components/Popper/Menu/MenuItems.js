import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {

    const classes = cx('menu-item', {
        separate: data.separate,
    })

    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
            className={classes}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;