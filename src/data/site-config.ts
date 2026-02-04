import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import logoUrl from '../assets/images/logo.svg?url';
import defaultSocial from '../assets/images/ovidius-preview.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: '捷印工坊 logo'
    },
    title: '捷印工坊',
    description: '您好！歡迎來到 「捷印工坊」「於角落之中，刻畫生活的立體維度。」',
    image: {
        src: defaultSocial,
        alt: '捷印工坊 - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: '首頁',
            href: '/'
        },
        {
            text: '分類',
            href: '/blog'
        },
        {
            text: '關於',
            href: '/about'
        },
        {
            text: '聯絡我們',
            href: '/contact'
        },
    ],
    secondaryNavLinks: [
        {
            text: '聯絡我們',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://www.facebook.com/people/捷印工坊/61586933412284/',
            icon: 'github' // ¿Mantienes el GitHub del tema original? Si es el tuyo, está bien.
        },
        {
            text: 'Follow on Line', // Cambiado texto para coincidir
            href: 'https://line.me/R/ti/p/@921gkczn',
            icon: 'instagram' // Ojo: Se verá como Instagram
        },
        {
            text: 'Visit Shopee Store', // Cambiado texto para coincidir
            href: 'https://tw.shp.ee/4REZSGN',
            icon: 'bluesky' // Ojo: Se verá como Bluesky
        }
    ],
    hero: {
        title: '捷印工坊',
        text: "您好！歡迎來到 「捷印工坊」「於角落之中，刻畫生活的立體維度。」",
        avatar: {
            src: heroAvatar,
            alt: 'Justin Case'
        },
        backgroundImage: {
            src: heroBackground
        }
    },
    subscribe: {
        enabled: true,
        title: '若您有需要，我們可以協助您列印 3D 作品',
        text: '歡迎來信諮詢，我們將盡快回覆。您可以提供 STL 檔案，我們將為您提供免費估價，完全無須承擔任何費用。',
        form: {
            action: 'mailto:jieyingongfang@gmail.com',
            emailFieldName: 'EMAIL',
            honeypotFieldName: ''
        }
    },
    postsPerPage: 5
};

export default siteConfig;
