import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a> */}
            <div>
                Developed by <a href='https://github.com/pavelray' target="_blank" rel="noreferrer">#Ray</a>
            </div>
            <div>
                Contribute to Public Api's ? Click <a href='https://github.com/public-apis-dev/public-apis/blob/main/CONTRIBUTING.md' target="_blank" rel="noreferrer">here</a>
            </div>
            <div className='socialIcons'>
                <a href='https://github.com/pavelray' target="_blank" rel="noreferrer">
                    <Image src="/github.svg" alt="Github Logo" width={30} height={30} />
                </a>
                <a href='https://www.linkedin.com/in/pavelray/' target="_blank" rel="noreferrer">
                    <Image src="/linkedin.svg" alt="Linked In Logo" width={30} height={30} />
                </a>
            </div>
        </footer>
    )
}
