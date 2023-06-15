"use client"

import styles from './page.module.scss'
import FeaturedCuttings from '@/components/featured-cuttings';
import List from '@/components/common/ordered-list/container';
import ListItem from '@/components/common/ordered-list/item';
import MainLayout from '@/components/layouts/main-layout';
import Link from "next/link";

export default async function Home() {

    return (
        <MainLayout>
            <section className={styles.intro}>
                <div>
                    <h2>Laatste Planten</h2>
                    <Link href="/plants">Bekijk alle &gt;</Link>
                </div>
                <FeaturedCuttings />
                <h2>Hoe werkt het?</h2>
                <List>
                    <ListItem>Bekijk onze collectie van stekjes. Kies eentje uit die u bevalt!</ListItem>
                    <ListItem>Vul uw gegevens in om in aanstelling te komen om te ruilen.</ListItem>
                    <ListItem>Identificeer uw eigen plant en vul de desbetreffende informatie in.</ListItem>
                    <ListItem>(Optioneel) U kunt ook gewoon een plant doneren. Vul wel de gegevens in.</ListItem>
                </List>
            </section>
        </MainLayout>
    )
}
