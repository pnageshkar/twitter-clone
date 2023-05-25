import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import LoginModal from '@/components/models/LoginModal';
import RegisterModal from '@/components/models/RegisterModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
