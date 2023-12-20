import styles from './layout.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (<div className={styles.container}>{children}</div>;
}
