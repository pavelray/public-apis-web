
import PrimaryButton from '../components/Button';
import styles from '../styles/Error.module.css';
import { useRouter } from 'next/router';

export default function Error() {
    const router = useRouter();
    const handleOnClick = () => {
        router.push('/');
    }
    return (
        <div className={styles.container}>
            <h1>Oops.. !!</h1>
            <h2>Some error occoured. Please try after sometime.</h2>
            <PrimaryButton text="Go To Home Page" onClick={handleOnClick} />
        </div>
    )
}
