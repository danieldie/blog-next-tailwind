/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider  } from "../../../src/components";

const ArticleDefaultLayout = () => {
    /**
     * First we have to go the _ARTICLE_LIST.txs in BLOG_CONSTANTS and make an entry of the article you are about to write
     */

    return (
        // PageLayout is the wrapper which will display Centered or with sidebar layout
        <PageLayout blogwithsidebar>
            {/* 
                Image will display images, save images in public -> images folder
                pass image path in src="path"
                if you cant to add caption -> caption="caption text"
                if you cant to add alt text (good for SEO) -> alt="dummy image alt text"
                we have three sizes :  ImageSize.FUll || ImageSize.SMALL || ImageSize.DEFAULT                      
            */}
            <Image src="/images/dummy-banner-img.jpg" caption="this is banner image example" alt="dummy image alt text" size={ImageSize.FUll} />

            <ArticleHeader />

           {/* 
                Text will display a paragraph, or title or quote as per the value passed
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text p>
                <b>{'<Text p>'}</b>               This will display a paragraph<br />
                you can pass :
                color : color="#3543EA" <br />
                textAlign: = TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
            </Text>

            <Seperator line />

           {/* 
                <Text subtitle> will display a section title
                you can pass 
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text subtitle>
                Section Title
            </Text>
            <Text>
                <b>{'<Text subtitle>'}</b> This will display a section title<br />
                you can pass :
                color : color="#3543EA" <br />
                textAlign: = TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
                Lorem ipsum dolor sit amet, consectetur elit, <br /> sed do eiusmod tempor
            </Text>

            {/* 
                <Text quote> will display a Quoted text
                you can pass 
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text quote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
                <b>{'<Text quote>'}</b> will display a Quoted text <br />
                you can pass 
                color : color="#3543EA"
                textAlign: textAlign={'{TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}'}
            </Text>

            <Seperator dots />

            <Text subtitle className="mt-10">
                Image Slider
            </Text>
            <Slider className="mt-2 mb-3" images={[
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150'
            ]} />
            <Text className="font-semibold">
                {`
                    <Slider className="mt-2" images={[
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150' 
                    ]} />
                `}
            </Text>
        </PageLayout>
    )
}

export default ArticleDefaultLayout;