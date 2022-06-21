import type { NextPage } from 'next';
import classes from './index.module.scss'; // --> need to know about this
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import ARTICLES_LIST from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { useEffect, useState } from 'react';
import { combineClasses, getTheme } from '../src/utils/utils';
import { NavbarType, THEMES } from '../src/shared/enums';
import Navbar from '../src/components/Navbar';
import { PRIMARY_NAV } from '../BLOG_CONSTANTS/_BLOG_SETUP';

const Home: NextPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  return (
    <div className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-darkBlue font-spaceGray" : "bg-offWhite font-spaceGray")} style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }}>
      <Navbar />
      <div className={combineClasses("container")}>
        <FeaturedArticle article={ARTICLES_LIST[0].preview} path={ARTICLES_LIST[0].path} />
        {/* main article  taking full width*/}
        {/* list of rest of the articles below it, one beside the other */}
        <div className={classes.articles_wrap}>
          {
            ARTICLES_LIST.map((each, i) => (
              <ArticleCard article={each.preview} path={each.path} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
