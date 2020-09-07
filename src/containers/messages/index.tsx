import React from 'react';
import { Header, SideNav, Main, Footer, Page, PageTitle, PageWrapper, SectionTitle, Card, CardBody, InfoCard, RoundIcon } from 'components';
import { useLocale } from 'locales';

const Message: React.FC<unknown> = () => {
  const texts = useLocale();
  return (
    <Page>
      <SideNav />
      <PageWrapper>
        <Header />
        <Main>
          <PageTitle>{texts.MESSAGES}</PageTitle>
		  <a
        className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-blue-100 bg-blue-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue"
        href="/"
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>Created with heart not mind</span>
        </div>
        <span>
          View more <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }} />
        </span>
      </a>
		  <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total clients" value="6389">
          <RoundIcon
            icon="i-person"
            color="text-orange-500 dark:text-orange-100"
            bgColor="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon="i-person"
            color="text-green-500 dark:text-green-100"
            bgColor="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon="i-person"
            color="text-blue-500 dark:text-blue-100"
            bgColor="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon="i-person"
            color="text-teal-500 dark:text-teal-100"
            bgColor="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <SectionTitle>Big section cards</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">Large, full width sections goes here</p>
        </CardBody>
      </Card>

      <SectionTitle>Cards with title</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
              exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-blue-600">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
              exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>
      </div>
        </Main>
        <Footer />
      </PageWrapper>
    </Page>
  );
};

export default Message;
